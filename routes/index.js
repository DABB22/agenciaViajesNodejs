//? Aquí se está colocando todo lo relacionado a las rutas.
/*
* como no podemos crear otra app porque solo debemos tener una instancia de nuestra aplicación
const app = express();
* lo que si podemos haces es importar express y despues definir el router
const router = express.Router();
* y de esta forma estaremos usando la misma instacia de express pero estamos extendiendo o utilizando
* su router.
*/
//importamos express
import express from 'express';
//importamos del controlador de paginas
import {paginaContacto, 
    paginaDetalleViaje, 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes
} from '../controllers/paginasController.js'
//importamos del controlador de testimoniales
import { guardarTestimonial 
} from '../controllers/testimonialController.js'

//utilizamos el router
const router = express.Router();


//* Asignamos las rutas al objeto de router
// estas rutas se van a ir colocando dentro del router de express y luego se van agregar al app definido
// en el index.js que está en la raiz principal porque solamente podemos tener una instancia de express
// de otra forma se va reiniciar el servidor y no va a estar conectada una parte con la otra.

/*
* haciendo uso del MVC, la parte del callback se debe usar en la parte del controlador ya que alli
* se define lo que se requiere que haga, por lo cual vamos a dejar solo definida la url en el router
router.get('/', (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}); */

router.get('/', paginaInicio);

/*
router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
    
    const viajes = 'Viaje a Europa';// Esto es una variable de JS, cómo hacemos para enviarla 
    a la vista del html?, en el metodo render() el segundo parametro se puede armar un objeto
    y ahi podemos colocar toda la información que se requiera mandar a la vista del archivo .pug
    relacionado en el primer parametro.    
    mostramos una vista del archivo nosotros.pug
    
    res.render('nosotros',{
        viajes //object literal enhancement - llave y valor son iguales por lo cual solo indicamos una
    }); 
}) */

router.get('/nosotros', paginaNosotros);

/*
router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    })
}) 

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
})

router.get('/contacto', (req, res) => {
    res.send('Contacto');
}); 
*/

router.get('/viajes', paginaViajes);
//el texto - /:viaje - indicado luego de la palabra viajes en donde se indica la ruta se le conoce 
//como comodín y puede tomar cualquier nombre
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

router.get('/contacto', paginaContacto);

export default router;