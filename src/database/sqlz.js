const { Sequelize, DataTypes } = require('sequelize');

//Configuramos la conexión a la base de datos
const sequelize = new Sequelize('reciclarg_db', 'root', '35912768Ruth', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conexión a la base de datos con sequelize!');
}).catch(err => console.log('Error al conectar sequelize', err));


module.exports = sequelize;