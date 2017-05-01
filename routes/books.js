var express = require('express');
var router = express.Router();
var book = require('../models/book.model');


router.get('/', function(req, res, next) {
  book.find({}).exec(function (err, books) {
    if(err){
      res.send('Ошибка чтения из базы данных');
    }else{
      res.render('books_list', { title: 'Список книг', book_list: books});
      console.log(books);
    }
  });
});

router.get('/:id', function(req, res, next) {
  book.findOne({_id: req.params.id}).exec(function (err, book){
    if(err){
      res.send('Ошибка чтения из базы данных');
    }else{
      res.render('book_single', book);
    }
  });
});

module.exports = router;
