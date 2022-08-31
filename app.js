const express = require('express')
const { keepalive } = require('./logica_negocio/keepalive')
const entradasRouter = require('./endpoints/entradas')

const app = express()

app.get('/keepalive', keepalive)

app.use('/entradas', entradasRouter)

module.exports = app