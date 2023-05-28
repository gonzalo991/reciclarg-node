const connection = require('../database/db');

// Obtener todos los marcadores
async function getMarkers(req, res) {
  connection.query('SELECT * FROM marcadores', (err, results) => {
    if (err) {
      console.error('Error al obtener los marcadores: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
}

// Crear un nuevo marcador
async function createMarker(req, res) {
  const { lat, long, title, description } = req.body;
  const newMarker = { lat, long, title, description };
  connection.query('INSERT INTO marcadores SET ?', newMarker, (err, result) => {
    if (err) {
      console.error('Error al crear el marcador: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Marcador creado exitosamente');
  });
}

// Obtener un marcador por su ID
async function getMarkerById(req, res) {
  const markerId = req.params.id;
  connection.query('SELECT * FROM marcadores WHERE id = ?', markerId, (err, results) => {
    if (err) {
      console.error('Error al obtener el marcador: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Marcador no encontrado');
      return;
    }
    res.json(results[0]);
  });
}

// Actualizar un marcador por su ID
async function updateMarker(req, res) {
  const markerId = req.params.id;
  const { lat, long, title, description } = req.body;
  const updatedMarker = { lat, long, title, description };
  connection.query('UPDATE marcadores SET ? WHERE id = ?', [updatedMarker, markerId], (err, result) => {
    if (err) {
      console.error('Error al actualizar el marcador: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Marcador actualizado exitosamente');
  });
}

// Eliminar un marcador por su ID
async function deleteMarker(req, res) {
  const markerId = req.params.id;
  connection.query('DELETE FROM marcadores WHERE id = ?', markerId, (err, result) => {
    if (err) {
      console.error('Error al eliminar el marcador: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Marcador eliminado exitosamente');
  });
}

module.exports = {
  getMarkers,
  createMarker,
  getMarkerById,
  updateMarker,
  deleteMarker,
};
