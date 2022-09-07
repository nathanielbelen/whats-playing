const logger = (req, res, next) => {
  console.log(`${req.ip} has hit endpoint ${req.path} with a ${req.method} request.`)
  next();
}

const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}

module.exports = { logger, requestTime };