const router = require('express').Router()
const loginBus = require('./../logica_negocio/login')


router.post('/', loginBus.login); 
 

module.exports = router