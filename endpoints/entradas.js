const router = require('express').Router()
const entradas = require('./../logica_negocio/entradas')


router.post('/', entradas.guardarEntrada);
router.get('/', entradas.obtenerTodas);
router.get('/:eid', entradas.obtenerUna);
router.put('/:eid', entradas.actualizarEntrada);
router.delete('/:eid', entradas.borrarEntrada);

module.exports = router