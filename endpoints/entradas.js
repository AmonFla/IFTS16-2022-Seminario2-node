const router = require('express').Router()
const entradas = require('./../logica_negocio/entradas')
const comentarios = require('./../logica_negocio/comentarios')


router.post('/', entradas.guardarEntrada);
router.get('/', entradas.obtenerTodas);
router.get('/:eid', entradas.obtenerUna);
router.put('/:eid', entradas.actualizarEntrada);
router.delete('/:eid', entradas.borrarEntrada);

//comentarios
router.post('/:eid/comentarios', comentarios.guardar);
router.get('/:eid/comentarios', comentarios.obtener);
router.put('/:eid/comentario/:cid', comentarios.update);
router.post('/:eid/comentario/:cid', comentarios.deleteC);

module.exports = router