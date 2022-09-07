const guardarCategoria = (req, res) => {
  res.status(200).json({message : 'post'})
}
 
const obtenerTodas = (req, res) => {
  res.status(200).json({message : 'get all category'})
 }

const obtenerUna = (req, res) => {
  res.status(200).json({message : 'get con id'})
 }

const actualizarCategoria = (req, res) => {
  res.status(200).json({message : 'put'})
 }

const borrarCategoria =(req, res) => {
  res.status(200).json({message : 'delete'})
}
 
module.exports = {guardarCategoria, obtenerTodas, obtenerUna, actualizarCategoria, borrarCategoria} 