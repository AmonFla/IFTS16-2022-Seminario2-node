const { Categoria } = require('../models')

const getAll = async() => {
  const data = await Categoria.findAll()
  return data
 }

const getOne = async(id) => {
  const data = await Categoria.findByPk(id)
  return data
 }

const updateOne = async (id, datos) => {
  const data = await getOne(id);
  data.nombre = datos.nombre;
  data.save()
  return data
 }

const deleteOne = async(id) => { 
  await Categoria.destroy({
    where: {
      id
    }
  })
  return 202
}

const saveOne = async (datos) => {
  const data = await Categoria.create({nombre: datos.nombre})
  return data
}

module.exports = {getAll, getOne, updateOne, deleteOne, saveOne}