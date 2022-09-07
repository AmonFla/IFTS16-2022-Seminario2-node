const router = require('express').Router()
const etiquetas = require('./../logica_negocio/etiquetas')


router.post('/', etiquetas.guardarEtiqueta);
router.get('/', etiquetas.obtenerTodas);
router.get('/:tid', etiquetas.obtenerUna);
router.put('/:tid', etiquetas.actualizarEtiqueta);
router.delete('/:tid', etiquetas.borrarEtiqueta);
 

module.exports = router