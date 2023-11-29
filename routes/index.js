var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.info(`[INFO] Environment: ${process.env}`);
  res.render('index', { title: 'Express' });
});

router.get('/api/url', function(req, res) {
  let url = req.param('url'),
      host = urlLib.parse(url).host;
  // BAD: the host of `url` may be controlled by an attacker
  let regex = /^((www|beta).)?example.com/;
  if (host.match(regex)) {
      res.redirect(url);
  }
});


// generate a API call to github with a token


module.exports = router;
