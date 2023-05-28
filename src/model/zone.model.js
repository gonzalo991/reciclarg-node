const sequelize = require('../database/sqlz');
const {DataTypes} = require('sequelize');


const Zone = sequelize.define('zona', {
    zona_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const createTable = async ()=> {
    try {
        await sequelize.sync();
        console.log('Tabla zona creada');
    } catch (error) {
        console.log('Error al crear zona', err);
    }
}

createTable();

module.exports = createTable;