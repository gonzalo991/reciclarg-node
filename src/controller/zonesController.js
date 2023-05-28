const connection = require('../database/db');

// Obtener todas las zonas
function getZones(req, res) {
  connection.query('SELECT * FROM zones', (err, results) => {
    if (err) {
      console.error('Error al obtener las zonas: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
}

// Crear una nueva zona
function createZone(req, res) {
  const { nombre, descripcion } = req.body;
  const newZone = { nombre, descripcion };
  connection.query('INSERT INTO zones SET ?', newZone, (err, result) => {
    if (err) {
      console.error('Error al crear la zona: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Zona creada exitosamente');
  });
}

// Obtener una zona por su ID
function getZoneById(req, res) {
  const zoneId = req.params.id;
  connection.query('SELECT * FROM zones WHERE id = ?', zoneId, (err, results) => {
    if (err) {
      console.error('Error al obtener la zona: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Zona no encontrada');
      return;
    }
    res.json(results[0]);
  });
}

// Actualizar una zona por su ID
function updateZone(req, res) {
  const zoneId = req.params.id;
  const { nombre, descripcion } = req.body;
  const updatedZone = { nombre, descripcion };
  connection.query('UPDATE zones SET ? WHERE id = ?', [updatedZone, zoneId], (err, result) => {
    if (err) {
      console.error('Error al actualizar la zona: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Zona actualizada exitosamente');
  });
}

// Eliminar una zona por su ID
function deleteZone(req, res) {
  const zoneId = req.params.id;
  connection.query('DELETE FROM zones WHERE id = ?', zoneId, (err, result) => {
    if (err) {
      console.error('Error al eliminar la zona: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Zona eliminada exitosamente');
  });
}

module.exports = {
  getZones,
  createZone,
  getZoneById,
  updateZone,
  deleteZone,
};
