const router = require('express').Router()
const categorias = require('./../logica_negocio/categorias')


router.post('/', categorias.guardarCategoria);
router.get('/', categorias.obtenerTodas);
router.get('/:catid', categorias.obtenerUna);
router.put('/:catid', categorias.actualizarCategoria);
router.delete('/:catid', categorias.borrarCategoria);
 

module.exports = router