const express = require('express');
const router = express.Router();
const markersController = require('./markersController');

// Ruta para obtener todos los marcadores
router.get('/markers', markersController.getMarkers);

// Ruta para crear un nuevo marcador
router.post('/markers', markersController.createMarker);

// Ruta para obtener un marcador por su ID
router.get('/markers/:id', markersController.getMarkerById);

// Ruta para actualizar un marcador por su ID
router.put('/markers/:id', markersController.updateMarker);

// Ruta para eliminar un marcador por su ID
router.delete('/markers/:id', markersController.deleteMarker);

module.exports = router;
