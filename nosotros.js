const express = require('express');
const router = express.Router();
const nosotrosController = require('./nosotrosController');

// Rutas CRUD de usuarios
router.get('/nosotros', nosotrosController.getNosotros);
router.post('/nosotros', nosotrosController.createNosotros);
router.get('/nosotros/:id', nosotrosController.getNosotrosById);
router.put('/nosotros/:id', nosotrosController.updateNosotros);
router.delete('/nosotros/:id', nosotrosController.deleteNosotros);

module.exports = router;
