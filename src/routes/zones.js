const express = require('express');
const router = express.Router();
const zonesController = require('./zonesController');

// Rutas CRUD de zonas
router.get('/zones', zonesController.getZones);
router.post('/zones', zonesController.createZone);
router.get('/zones/:id', zonesController.getZoneById);
router.put('/zones/:id', zonesController.updateZone);
router.delete('/zones/:id', zonesController.deleteZone);

module.exports = router;
