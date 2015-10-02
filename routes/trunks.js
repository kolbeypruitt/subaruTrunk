var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/trunkswap');
var trunksdb = db.get('trunks');
var bodyParser = require('body-parser');


/* GET trunk posting page. */
router.get('/post_trunk', function(req, res, next) {
  console.log(req.body)
  res.render('post_trunk/index', {
    title: 'Subaru WRX Trunk Swapper',
    message: 'Please post your trunk here.'
  });
});

/* POST trunk. */
router.post('/posted', function(req, res, next) {
  trunksdb.insert({
    // year:req.body.year,
    // model:req.body.model,
    // color:req.body.color
      },function (err,records) {
    console.log('this is records ->>' + records);
    console.log('this is req.body ->>' + req.body);
    console.log('this is req.body.year ->>' + req.body.year);
  });

  res.render('post_trunk/index', {
    title:'Subaru WRX Trunk Swapper',
    message:'Thank you for posting.',
    year:req.body.year,
    model:req.body.model,
    color:req.body.color

  });


});

/* GET search trunk page. */
router.get('/search_trunk', function(req, res, next) {
  res.render('search_trunk/index', { title: 'Subaru WRX Trunk Swapper' })
});

module.exports = router;