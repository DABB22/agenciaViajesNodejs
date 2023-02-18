//? MODELO TESTIMONIALES
// importamos Sequelize de las dependencias e importamos db del archivo db.js

import Sequelize from 'sequelize';
import db from '../config/db.js';

//* DEFINIR NUESTRO PRIMER MODELO
// primer parametros es el nombre de la tabla, segundo parametro es un objeto de configuración
// en este vamos a definir cada una de las tablas 
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})
