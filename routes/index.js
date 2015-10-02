var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/trunkswap');
var trunksdb = db.get('trunks');
var bodyParser = require('body-parser');





/* GET home page. */
router.get('/', function(req, res, next) {
  trunksdb.find({},function (err,records) {
    console.log(records);
  })
  res.render('index', { title: 'Subaru WRX Trunk Swapper'  });
});

module.exports = router;
