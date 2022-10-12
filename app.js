const express = require('express')
const { keepalive } = require('./logica_negocio/keepalive')
const cors = require("cors");
const entradasRouter = require('./endpoints/entradas')
const categoriasRouter = require('./endpoints/categorias')
const etiquetasRouter = require('./endpoints/etiquetas')
const loginRouter = require('./endpoints/login')
const middleware = require('./utils/middleware')
require('express-async-error')

const app = express()
app.use(cors())
app.use(express.json())

app.use(middleware.consoleData)
app.use(middleware.getToken)


app.get('/keepalive', keepalive)
app.use('/login', loginRouter)

// CAS0 1 - TODOS LOS ENDPOINT SIGUIENTES necesitan el token
// app.use(middleware.validateToken) 

//CASO 2 - SOLO TODO LOS ENDPOINT DE ETRADA LO NECESITEN
app.use('/entradas', middleware.validateToken, entradasRouter)

app.use('/categorias', categoriasRouter)
app.use('/etiquetas', etiquetasRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app