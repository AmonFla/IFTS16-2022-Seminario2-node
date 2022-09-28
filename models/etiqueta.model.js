const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Etiqueta extends Model {}

Etiqueta.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre:{
    type: DataTypes.STRING(200),
    allowNull: false
  }
},{
  sequelize,
  underscored: true,
  modelName: 'etiquetas'
})


module.exports = Etiqueta