import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DB_HOST)


//? TODO ESTO ES LO QUE SE REQUIERE PARA CONFIGURAR SEQUELIZE Y CONECTAR A MYSQL
// instalamos sequelize con npm i mysql2 sequelize

//hay que pasarle los siguientes valores, el primero es el nombre de la base de datos que te quieres
//conectar, segundo es el nombre del usuario, el tercero es el password y el cuarto es una serie de
//de configuraciones
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    //como la instalacion es local, el host es 127.0.0.1
    host: process.env.DB_HOST,

    //El puerto por default que se agrega es 3306
    port: process.env.DB_PORT,

    //el dialect se coloca mysql porque sql es un orm que tambien soporta una bd llamada postgre
    dialect: 'mysql',

    //agregamos esta linea de codigo porque esto tendia agregar un par de columnas cuando fue creado
    //y cuando fue actualizado en registro
    define: {
        timestamps: false
    },

    //El resto es configuración de sequelize
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorAliases: false
} )

export default db;