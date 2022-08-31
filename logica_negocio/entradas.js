const guardarEntrada = (req, res) => {
  res.status(200).json({message : 'post'})
}
 
const obtenerTodas = (req, res) => {
  res.status(200).json({message : 'get'})
 }

const obtenerUna = (req, res) => {
  res.status(200).json({message : 'get con id'})
 }

const actualizarEntrada = (req, res) => {
  res.status(200).json({message : 'put'})
 }

const borrarEntrada =(req, res) => {
  res.status(200).json({message : 'delete'})
}
 
module.exports = {guardarEntrada, obtenerTodas, obtenerUna, actualizarEntrada, borrarEntrada} 