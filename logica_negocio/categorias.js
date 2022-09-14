const DAO = require('../acceso_datos/categorias')

const guardarCategoria = async(req, res) => {
  const data = await DAO.saveOne(req.body)
  res.status(200).json(data)
}
 
const obtenerTodas = async(req, res) => {
  const data = await DAO.getAll();
  res.status(200).json(data)
 }

const obtenerUna = async(req, res) => {
  const data = await DAO.getOne(req.params.catid)
  res.status(200).json(data)
 }

const actualizarCategoria = async(req, res) => {
  const data = await DAO.updateOne(req.params.catid, req.body)
  res.status(200).json(data)
 }

const borrarCategoria = async(req, res) => {
  const code = await DAO.deleteOne(req.params.catid)
  res.status(code).send()
}
 
module.exports = {guardarCategoria, obtenerTodas, obtenerUna, actualizarCategoria, borrarCategoria} 