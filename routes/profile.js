var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var loggedIn = true;


  if(req.session.userid){
    res.render('profile', { currentUser: req.session.userid });
  } else {
    res.redirect("/login")
  }
});

module.exports = router;
