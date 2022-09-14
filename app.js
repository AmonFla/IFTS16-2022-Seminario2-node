const express = require('express')
const { keepalive } = require('./logica_negocio/keepalive')
const entradasRouter = require('./endpoints/entradas')
const categoriasRouter = require('./endpoints/categorias')
const etiquetasRouter = require('./endpoints/etiquetas')

const app = express()
app.use(express.json())

app.get('/keepalive', keepalive)

app.use('/entradas', entradasRouter)
app.use('/categorias', categoriasRouter)
app.use('/etiquetas', etiquetasRouter)

module.exports = app