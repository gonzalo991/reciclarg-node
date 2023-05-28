const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Rutas CRUD de usuarios
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/users/username/:username', (req, res) => {

    const { username } = req.params;
  

    userController.getUserByUsername(username)
      .then((user) => {
        if (!user) {
          res.status(404).send('Usuario no encontrado');
          return;
        }
        res.json(user);
      })
      .catch((err) => {
        console.error('Error al obtener el usuario por nombre de usuario: ', err);
        res.status(500).send('Error en el servidor');
      });
  });
  

module.exports = router;
