const { Etiquetas } = require('../models')

const getAll = async() => {
  const data = await Etiquetas.findAll()
  return data
 }

const getOne = async(id) => {
  const data = await Etiquetas.findByPk(id)
  return data
 }

const updateOne = async (id, datos) => {
  const data = await getOne(id);
  data.nombre = datos.nombre;
  data.save()
  return data
 }

const deleteOne = async(id) => { 
  await Etiquetas.destroy({
    where: {
      id 
    }
  })
  return 202
}

const saveOne = async (datos) => {
  const data = await Etiquetas.create({nombre: datos.nombre})
  return data
}

module.exports = {getAll, getOne, updateOne, deleteOne, saveOne}