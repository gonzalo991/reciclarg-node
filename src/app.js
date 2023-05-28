const express = require('express');
const bodyParser = require('body-parser');
const markersController = require('./controller/markersController');
const userController = require('./controller/userController');
const zonesController = require('./controller/zonesController');
const nosotrosController = require('./controller/nosotrosController');
const authRouter = require('./routes/auth');


const app = express();

// Configuración del body-parser
app.use(bodyParser.json());

// Rutas para el CRUD de marcadores
app.get('/markers', markersController.getMarkers);
app.get('/markers/:id', markersController.getMarkerById);
app.post('/markers', markersController.createMarker);
app.put('/markers/:id', markersController.updateMarker);
app.delete('/markers/:id', markersController.deleteMarker);

// Rutas para el CRUD de usuarios
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);
app.get('/users/username/:username', userController.getUserByUsername);

// Rutas para el CRUD de zonas
app.get('/zones', zonesController.getZones);
app.get('/zones/:id', zonesController.getZoneById);
app.post('/zones', zonesController.createZone);
app.put('/zones/:id', zonesController.updateZone);
app.delete('/zones/:id', zonesController.deleteZone);

// Rutas para el CRUD de nosotros
app.get('/nosotros', nosotrosController.getNosotros);
app.get('/nosotros/:id', nosotrosController.getNosotrosById);
app.post('/nosotros', nosotrosController.createNosotros);
app.put('/nosotros/:id', nosotrosController.updateNosotros);
app.delete('/nosotros/:id', nosotrosController.deleteNosotros);

// Ruta autenticación
app.use('/auth', authRouter);

app.use(require('./routes/models.routes'));
// Puerto en el que se ejecutará la aplicación
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});