const router = require('express').Router()
const categorias = require('./../logica_negocio/categorias')
const middleware = require('./../utils/middleware')


router.post('/', categorias.guardarCategoria);
router.get('/', categorias.obtenerTodas);
router.get('/:catid', categorias.obtenerUna);
router.put('/:catid', categorias.actualizarCategoria);

//CASE 3 - SOLO ESTE ENDPOINT DEBE USARSE CON TOKEN
router.delete('/:catid', middleware.validateToken, categorias.borrarCategoria);
 

module.exports = router