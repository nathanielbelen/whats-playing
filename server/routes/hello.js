const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`hello, you've hit the hello endpoint. hello!`);
});

module.exports = router;