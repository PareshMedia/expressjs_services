var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express2' });
});

router.get('/load',function(req,res){
  var mysqlCon = require('../db');
  mysqlCon.query("select * from users",function(err,rows,field){
    if (err) throw err
    res.json(rows);
    
  })
  
});

module.exports = router;
