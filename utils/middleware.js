const jwt = require('jsonwebtoken')
require('dotenv').config()

const consoleData = (req, res, next) => {
  console.log("Method:" + req.method);
  console.log("Path:" + req.path);
  console.log("Body:", req.body);
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  console.log("auth:", req.get('authorization'))
  console.log("------");
  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const getToken = (req, res, next) => {
  const auth = req.get('authorization')
  if (auth && auth.toLowerCase().startsWith('bearer') ) {
    req.token = auth.substring(7) 
  } else { 
    req.token = null
  }
  next()
}

const validateToken = (req, res, next) => { 
  
  // pregunto si req.token == null
  if (!req.token) { 
    return res.status(401).json({error: 'token missing'})
  }

  const decodedToken = jwt.verify(req.token, process.env.JWTSECRET)

  if (!decodedToken.id) { 
    return res.status(401).json({error: 'token invalid'})
  }

  req.user = decodedToken.id
  req.decodedToken = decodedToken

  next()
}

const errorHandler = (error, req, res, next) => { 
  console.log(error.message)

  if (error.name === 'JsonWebTokenError') { 
    return res.status(401).json({ error: 'invalid token' })
  }else if(error.name === 'TokenExpiredError') { 
    return res.status(401).json({ error: 'token expired' })
  }else if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } 

  next(error)
}
module.exports = { consoleData, unknownEndpoint, getToken , validateToken, errorHandler}