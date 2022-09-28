const DAO = require('../acceso_datos/etiquetas')

const guardarEtiqueta = async (req, res) => {
  try {
    const data = await DAO.saveOne(req.body)
    res.status(200).json(data)
  } catch (error) { 
    res.status(500).json(error)
  }
}
 
const obtenerTodas = async(req, res) => {
  const data = await DAO.getAll()
  res.status(200).json(data)
 }

const obtenerUna = async(req, res) => {
  const data = await DAO.getOne(req.params.tid)
  res.status(200).json(data)
 }

const actualizarEtiqueta = (req, res) => {
  DAO.updateOne(req.params.tid, req.body)
    .then((data) => { 
      res.status(200).json(data)
    })
    .catch((error) => { 
      res.status(500).json(error)
    })
  
 }

const borrarEtiqueta = async (req, res) => {
  try {
    const data = DAO.deleteOne(req.params.tid)
    res.status(data).send()
  } catch (error) { 
    res.status(404).send()
  }
}
 
module.exports = {guardarEtiqueta, obtenerTodas, obtenerUna, actualizarEtiqueta, borrarEtiqueta} 