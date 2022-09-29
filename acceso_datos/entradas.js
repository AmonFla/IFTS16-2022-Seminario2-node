const { Entrada, Categoria, Etiquetas } = require('../models')
 
const getAll = async() => {
  const data = await Entrada.findAll(
    {
      include: [
        { model: Categoria, required: false },
        { model: Etiquetas }
      ]
    } 
  )
  return data
 }

const getOne = async(id) => {
  const data = await Entrada.findByPk(id,{
    include: [
      { model: Categoria, required: false },
      { model: Etiquetas }
    ]
  })
  return data
 }

const updateOne = async (id, datos) => {
  const data = await getOne(id);
  data.nombre = datos.nombre;
  data.save()
  return data
 }

const deleteOne = async(id) => { 
  await Entrada.destroy({
    where: {
      id 
    }
  })
  return 202
}

const saveOne = async (datos) => {
  const data = await Entrada.create({ ...datos })
  
  if (datos.categoria) {
    let categoria = {}
    if (datos.categoria.id) {
      categoria = await Categoria.findByPk(datos.categoria.id)    
    } else {
       categoria = await Categoria.create(datos.categoria)
    }
    data.categoriaId = categoria.id
  }

  datos.tags.map(async (etiqueta) => {  
    if (etiqueta.id) {
      const tag = await Etiquetas.findByPk(etiqueta.id)
      data.addEtiquetas(tag)
    } else { 
      const tag = await Etiquetas.create(etiqueta)
      data.addEtiquetas(tag)
    } 
  })
  data.save()
  return data
}

module.exports = {getAll, getOne, updateOne, deleteOne, saveOne}