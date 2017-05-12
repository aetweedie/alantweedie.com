var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next){
  res.render('about');
});

router.get('/aerial', function(req, res, next){
  res.render('aerial');
});

router.get('/resume', function(req, res, next){
  res.render('resume');
})

module.exports = router;
