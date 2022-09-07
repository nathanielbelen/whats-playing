const express = require('express');
const path = require('path');
// middleware imports
const { logger, requestTime } = require(path.join(__dirname, 'middleware'))
// routes imports
const routes = require(path.join(__dirname, 'routes'))

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')))
app.use('/hello', routes.hello);
app.use('/login', routes.login);
app.use('/callback', routes.callback);

app.listen(port, () => {
  console.log('listening on port ', port)
})