const sequelize = require('../database/sqlz');
const { DataTypes } = require('sequelize');


const Recicla = sequelize.define('recicla', {
    recicla_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    tipoRecicla: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const Pregunta = sequelize.define('pregunta', {
    pregunta_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    pregunta: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const Motivo = sequelize.define('motivo', {
    motivo_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    tipoMotivo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const Paradero = sequelize.define('paradero', {
    paradero_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    tipoParadero: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const Desecho = sequelize.define('desecho', {
    desecho_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
    ,
    tipoDesecho: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


const Encuesta = sequelize.define('encuesta', {
    encuesta_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
});

// Relación de uno a muchos: Encuesta -> Recicla
Encuesta.hasMany(Recicla);
Recicla.belongsTo(Encuesta);

// Relación de uno a muchos: Encuesta -> Pregunta
Encuesta.hasMany(Pregunta);
Pregunta.belongsTo(Encuesta);

// Relación de uno a muchos: Encuesta -> Motivo
Encuesta.hasMany(Motivo);
Motivo.belongsTo(Encuesta);

// Relación de uno a muchos: Encuesta -> Paradero
Encuesta.hasMany(Paradero);
Paradero.belongsTo(Encuesta);

// Relación de uno a muchos: Encuesta -> Desecho
Encuesta.hasMany(Desecho);
Desecho.belongsTo(Encuesta);


const createTables = async () => {
    try {
        await sequelize.sync();
        console.log('Tabla encuesta creada');
    } catch (error) {
        console.log('Error al crear encuesta', err);
    }
}

createTables();


module.exports = createTables;