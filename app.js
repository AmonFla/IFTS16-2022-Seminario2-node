const express = require('express')
const { keepalive } = require('./logica_negocio/keepalive')
const cors = require("cors");
const entradasRouter = require('./endpoints/entradas')
const categoriasRouter = require('./endpoints/categorias')
const etiquetasRouter = require('./endpoints/etiquetas')
const loginRouter = require('./endpoints/login')
const middleware = require('./utils/middleware')

const app = express()
app.use(cors())
app.use(express.json())

app.use(middleware.consoleData)

app.get('/keepalive', keepalive)

app.use('/login', loginRouter)
app.use('/entradas', entradasRouter)
app.use('/categorias', categoriasRouter)
app.use('/etiquetas', etiquetasRouter)


app.use(middleware.unknownEndpoint)

module.exports = app