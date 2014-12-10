var router = require('express').Router();

router.get('/logout', function(req, res) {
	req.session.destroy();
	res.redirect('/');
});

router.get('/login', function(req, res) {
	res.render('login', {error: null});
});

router.post('/login', function(req, res) {
  var user = req.body['username'],
      pwd = req.body['password'];

  if(user !== 'person' || pwd !== 'theirpassword') {
	res.render('login',{error:'Invalid username and/or password'});
  } else { 
	req.session.loggedIn = true;
	res.redirect('/');
  }
});

module.exports = router;
