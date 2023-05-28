const connection = require('../database/db');

// Obtener todos los usuarios
function getUsers(req, res) {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error al obtener los usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
}

// Crear un nuevo usuario
function createUser(req, res) {
  const { nombre, username, password } = req.body;
  const newUser = { nombre, username, password };
  connection.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error al crear el usuario: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Usuario creado exitosamente');
  });
}

// Obtener un usuario por su ID
function getUserById(req, res) {
  const userId = req.params.id;
  connection.query('SELECT * FROM users WHERE id = ?', userId, (err, results) => {
    if (err) {
      console.error('Error al obtener el usuario: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Usuario no encontrado');
      return;
    }
    res.json(results[0]);
  });
}

// Actualizar un usuario por su ID
function updateUser(req, res) {
  const userId = req.params.id;
  const { nombre, username } = req.body;
  const updatedUser = { nombre, username };
  connection.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (err, result) => {
    if (err) {
      console.error('Error al actualizar el usuario: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Usuario actualizado exitosamente');
  });
}

// Eliminar un usuario por su ID
function deleteUser(req, res) {
  const userId = req.params.id;
  connection.query('DELETE FROM users WHERE id = ?', userId, (err, result) => {
    if (err) {
      console.error('Error al eliminar el usuario: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send('Usuario eliminado exitosamente');
  });
}

// Función para obtener un usuario por su nombre de usuario
function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    if (!username) {
      reject(new Error('El nombre de usuario no puede estar vacío'));
      return;
    }



    connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
        reject(err);
        return;
      }

      if (results.length === 0) {
        resolve(null);
        return;
      }

      const user = results[0];
      resolve(user);
    });
  });
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByUsername,
};
