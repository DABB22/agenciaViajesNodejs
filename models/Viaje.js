//? CREANDO EL PRIMER MODELO
// importamos Sequelize de las dependencias e importamos db del archivo db.js

import Sequelize from 'sequelize';
import db from '../config/db.js';

//* DEFINIR NUESTRO PRIMER MODELO
// primer parametros es el nombre de la tabla, segundo parametro es un objeto de configuración
// en este vamos a definir cada una de las tablas 
export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
})






