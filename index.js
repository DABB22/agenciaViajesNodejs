import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//* CONECTAR LA BD
db.authenticate()
    .then( () => {
        console.log('BD conectada')
    })
    .catch( error => {
        console.error(error, 'Falló la conexión')
    })


//* DEFINIR PUERTO
const port = process.env.PORT || 4000;

//* RUTAS DEFINIDAS.
//cuando vamos cargando asi y tenemos muchas url se está cargando mucho el archivo principal, podemos
//separarlos y pues es unas de las ventas del MVC, llevaremos las rutas hacía su propio archivo para
//un mejor orden
//vamos a usar .render() para mostrar un html completo
//estas rutas las enviamos al index.js de la carpeta de routes
/*
app.get('/inicio', (req, res) => {
    res.send('Inicio');
});

app.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

app.get('/contacto', (req, res) => {
    res.send('Contacto');
});
*/

//* HABILITAR PUG
//hay diferentes valores que le podemos pasar, uno de ellos es'view engine' esalgo que soporta express
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    // console.log(req);
    // console.log(res);
    
    //locals son variables internas de express, como es un objeto podemos agregarle nuevas propiedades
    //con la sitaxis de punto(.)
    const year = new Date();
    //actualYear variable que se le asigno el dato del año actual
    res.locals.actualYear = year.getFullYear();
    // console.log(res.locals);
    //nombreSitio variable que se le asigno el dato del nombre de la pág
    res.locals.nombreSitio = 'Agencia de viajes'
    next();
    // return next(); // solo se usa cuando el next no funciona por si solo y lo forzamos
})


//* Agregar body parser para leer los datos del formulario y que se puedan agregar al objeto
//* req.body indicado en el controlador
app.use(express.urlencoded({extended: true}));


//* DEFINIR LA CARPETA PUBLICA
app.use(express.static('public'))

//* AGREGAR ROUTER
//el use soporta todos los verbos, get, post, put, patch y delete
//este código lo que hace es que desde la página principal agrega router
//va agregar todas las rutas que vayamos definiendo en el router.
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})