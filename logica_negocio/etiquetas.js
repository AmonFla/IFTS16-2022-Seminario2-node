const guardarEtiqueta = (req, res) => {
  res.status(200).json({message : 'post'})
}
 
const obtenerTodas = (req, res) => {
  res.status(200).json({message : 'get'})
 }

const obtenerUna = (req, res) => {
  res.status(200).json({message : 'get con id'})
 }

const actualizarEtiqueta = (req, res) => {
  res.status(200).json({message : 'put'})
 }

const borrarEtiqueta =(req, res) => {
  res.status(200).json({message : 'delete'})
}
 
module.exports = {guardarEtiqueta, obtenerTodas, obtenerUna, actualizarEtiqueta, borrarEtiqueta} 