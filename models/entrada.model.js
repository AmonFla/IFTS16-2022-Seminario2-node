const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Entrada extends Model {}

Entrada.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo:{
    type: DataTypes.STRING(200),
    allowNull: false
  },
  fechaPub: {
    type: DataTypes.DATE,
    alloNull: false,

  },
  contenido: {
    type: DataTypes.TEXT,
    alloNull: false,
  },
  /*year:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1991
    validate:{
      min: {
        args: 1991,
        msg: 'year must be greater than or equal to 1991'
      },
      max: {
        args: new Date().getFullYear(),
        msg: `year must be less than or equal to ${new Date().getFullYear()}`
      },
    }*/
},{
  sequelize,
  underscored: true,
  modelName: 'entradas'
})


module.exports = Entrada