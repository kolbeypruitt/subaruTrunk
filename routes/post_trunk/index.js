var express = require('express');
var router = express.Router();
var colors = require('../lib/colors');
console.log(colors[2015].wrx.color.ism.lngColor);

/* GET home page. */

router.get('/post_trunk', function(req, res, next) {
  res.render('post_trunk/index', { title: 'post your trunk'  });
});

module.exports = router;

