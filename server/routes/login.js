require('dotenv').config()
const crypto = require("crypto");
const express = require('express');
const router = express.Router();
const querystring = require('querystring');

router.get('/', function(req, res) {

  var state = crypto.randomBytes(8).toString('hex');
  var scope = 'user-read-private user-read-email';
  console.log('random state is ', state);
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: scope,
      redirect_uri: process.env.REDIRECT_URI,
      state: state
    }));
});

module.exports = router;