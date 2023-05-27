const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('./userController'); // Importa la función getUserByEmail desde userController.js

// Función para manejar el inicio de sesión
async function login(req, res) {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario existe en la base de datos
    const user = await getUserByEmail(username);
    if (!user) {
      res.status(401).json({ message: 'Credenciales inválidas' });
      return;
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Credenciales inválidas' });
      return;
    }

    // Generar un token de autenticación
    const token = generateAuthToken(user.id);

    // Enviar la respuesta con el token
    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
}

// Función para generar un token de autenticación
function generateAuthToken(userId) {
  const secretKey = 'tu_clave_secreta'; // Reemplaza esto con tu propia clave secreta
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  return token;
}

module.exports = {
  login,
};
