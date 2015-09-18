var express = require('express');
var router = express.Router();


/* GET home page. */


router.get('/search_trunk', function(req, res, next) {
  res.render('search_trunk/index', {
    title: 'search for a trunk',
    colors: colors[2015].wrx.color.cbs.lngColor });
});
module.exports = router;

