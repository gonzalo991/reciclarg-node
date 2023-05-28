const sequelize = require('../database/sqlz');
const {DataTypes} = require('sequelize');


const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const createTables = async ()=> {
    try {
        await sequelize.sync();
        console.log('Tabla usuarios creada');
    } catch (error) {
        console.log('Error al crear usuarios', err);
    }
}

createTables();

module.exports = createTables;