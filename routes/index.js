var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Subaru WRX Trunk Swapper'  });
});

router.get('/post_trunk', function(req, res, next) {
  res.render('post_trunk/index', { title: 'Subaru WRX Trunk Swapper'  });
});

router.get('/search_trunk', function(req, res, next) {
  res.render('search_trunk/index', { title: 'Subaru WRX Trunk Swapper'  });

  
});

module.exports = router;

