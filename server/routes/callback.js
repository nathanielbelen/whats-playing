require('dotenv').config();
const express = require('express');
const axios = require('axios').default;
const router = express.Router();

const authString = 'Basic ' + (Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64'));

router.get('/', (req, res) => {
  const { code = null, state = null } = req.query;
  console.log(`code: ${code}, state: ${state}`);
  if (state  !== null) {
    // we received a code and a state, let's try to get an access token
    const config = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': authString, 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      params: {
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
      }
    }
    axios(config)
      .then((response) => {
        console.log(`data: ${response.data}, query: ${response.query}`)
        res.send(response.data);
      })
      .catch((err) => {
        // console.log('ERROR GETTING SPOTIFY ACCESS TOKEN', err),
        res.send(err);
      })
  } else {
    res.send('u had an error big boy');
  }
});

module.exports = router;