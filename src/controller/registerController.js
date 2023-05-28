const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../database/db');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ message: 'El usuario ya existe' });
    }

    // Generar el hash del password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el nuevo usuario en la base de datos
    const newUser = {
      username: username,
      password: hashedPassword,
    };
    await insertUser(newUser);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Función para obtener un usuario por su nombre de usuario
function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE username = ?', username, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
}

// Función para insertar un nuevo usuario en la base de datos
function insertUser(user) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', user, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = router;
