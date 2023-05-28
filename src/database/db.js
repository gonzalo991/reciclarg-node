const mysql = require('mysql2');


// Configura la conexión con la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '35912768Ruth',
  database: 'reciclarg_db',
});

// Conéctate a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});


module.exports = connection;
