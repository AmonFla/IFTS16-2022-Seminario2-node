const { DATE } = require('sequelize');
const DAO = require('../acceso_datos/entradas')

const guardarEntrada = async (req, res) => {
  const data = await DAO.saveOne(req.body);
  res.status(200).json(data)
}
 
const obtenerTodas = async (req, res) => {
  const data = await DAO.getAll()
  res.status(200).json(data)
 }

const obtenerUna = async(req, res) => {
  const data = await DAO.getOne(req.params.eid)
  res.status(200).json(data)
 }

const actualizarEntrada = async (req, res) => {
  const data = await DAO.updateOne(req.params.eid,req.body)
  res.status(200).json(data)
 }

const borrarEntrada =(req, res) => {
  res.status(200).json({message : 'delete'})
}
 
module.exports = {guardarEntrada, obtenerTodas, obtenerUna, actualizarEntrada, borrarEntrada} 