const Categoria = require('./categoria.model') 
const Etiquetas = require('./etiqueta.model') 
const Entrada = require('./entrada.model') 

Entrada.belongsTo(Categoria)
Categoria.hasMany(Entrada)

Entrada.belongsToMany(Etiquetas, {through: 'entrada_etiqueta'}) 
Etiquetas.belongsToMany(Entrada, {through: 'entrada_etiqueta'}) 

module.exports = {
  Categoria,
  Etiquetas,
  Entrada
}