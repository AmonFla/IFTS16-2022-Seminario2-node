const jwt = require('jsonwebtoken')
require('dotenv').config()


const login = (req, res) => {
  const body = req.body
  if (body.username == 'admin' && body.password == '123456') {
    // usuario correcto
    const tokenData = {
      username: body.username,
      id: 123,
      role: 'admin'
    }
    const token = jwt.sign(tokenData, process.env.JWTSECRET, {expiresIn: '50m'})
    res.status(200).send({token, name: 'fulanito de tal'})

  } else { 
    return res.status(401).json({error:'credenciales incorrectas'})
  }


}

module.exports = {login}