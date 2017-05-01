var express = require('express');
var router = express.Router();

var Users = require('../models/users.model');

router.get('/', function(req, res, next) {
  Users.find({}).exec()
    .then(function(users){
      res.render('user_list', { title: 'Список пользователей', user_list: users});
    })
    .catch(function(err){
      res.send('ошибка чтения базы пользователей');
    });
});

router.post('/add', function (req, res) {
  var newUser = new Users();
  newUser.name = req.body.name,
  newUser.email = req.body.email,
  newUser.mobile = req.body.mobile,
  newUser.city = req.body.city

  newUser.save()
     .then(function(data) {
        res.send(data);
     })
     .catch(function(err){
       res.send('ошибка добавления пользователя');
     });
});

router.put('/:id', function(req, res){
  Users.findOneAndUpdate(
    {_id: req.params.id},
    { $set: { name: req.body.name }},
    { upsert: true},
    function(err, data) {
      if(err){
        console.log('ошибка обновления')
      }else{
        console.log(data);
        res.send('Успех');
      }
  });
});

router.delete('/:id', function(req, res) {
  Users.findOneAndRemove({_id: req.params.id}, function(err, data){
    if(err){
      res.send('Ошибка удаления пользователся')
    }else{
      res.send('Пользователь удачно удален');
    }
  });
});

module.exports = router;