var express = require('express');
var router = express.Router();

/* GET ps3 page. */
router.get('/', function(req, res, next) {
  res.render('ps3', { title: 'PS3 Assignment, ', message:'This is a CS 412 Assignment with Prof. Donham.'});
});

/* POST page. */
router.post('/', function(req, res, next) {
  res.render('ps3', { message:req.body.message, size:req.body.message.length});
});
module.exports = router;
