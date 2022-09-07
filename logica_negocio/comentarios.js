//comentarios 

const guardar = (req, res) => {
  res.status(200).json({message : 'post'})
}
 
const obtener  = (req, res) => {
  res.status(200).json({message : 'get'})
 }
 

const update = (req, res) => {
  res.status(200).json({message : 'put'})
 }

const deleteC =(req, res) => {
  res.status(200).json({message : 'delete'})
}
 
module.exports = {guardar, obtener, update, deleteC} 