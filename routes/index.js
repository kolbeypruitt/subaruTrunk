var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/trunkswap');
var trunksdb = db.get('trunks'); // this is the call to the collection trunks in db trunkswap







/* GET home page. */
router.get('/', function(req, res, next) {
  trunksdb.find({},function (err,records) {
    console.log(records);
  })
  res.render('index', { title: 'Subaru WRX Trunk Swapper'  });
});
/* GET post trunk page. */
router.get('/post_trunk', function(req, res, next) {
  trunksdb.insert({},function (err,records) {
    console.log(records);
  })
  res.render('post_trunk/index', { title: 'Subaru WRX Trunk Swapper'  });
});
/* GET search trunk page. */
router.get('/search_trunk', function(req, res, next) {
  res.render('search_trunk/index', { title: 'Subaru WRX Trunk Swapper' })
});

module.exports = router;

  // var year = document.getElementById("year").selectedIndex;
  // var model = document.getElementById("model").disabled;
  // console.log(year);
  // console.log(model);
