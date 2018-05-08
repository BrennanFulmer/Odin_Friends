var express = require('express');
var router = express.Router();
const {God, gods} = require('../models/gods')

router.get('/', function(req, res, next) {
  res.render('index', { gods: gods })
})

module.exports = router;
