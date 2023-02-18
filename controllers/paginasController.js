import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'


const paginaInicio = async (req, res) => {

    //*Consultar la BD para pasar la información de 3 viajes a la vista
    //1. debemos importar el modelo ya que ahi tenemos todos los campos de la bd y gracias al modelos 
    //podremos acceder a los metodos

    //findAll() nos va a traer todos los resultados que hay en la tabla de viaje de la BD

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3}))
    promiseDB.push(Testimonial.findAll({ limit: 3}))

    try {
        
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });

    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros =  (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros',
    });

}

const paginaViajes = async (req, res) => {

    //Consultar la BD para pasar la información de viajes a la vista
    //1. debemos importar el modelo ya que ahi tenemos todos los campos de la bd y gracias al modelos 
    //podremos acceder a los metodos

    //findAll() nos va a traer todos los resultados que hay en la tabla de viaje de la BD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {

    //Consultar la BD para pasar la información de los testimoniales a la vista
    //1. debemos importar el modelo ya que ahi tenemos todos los campos de la bd y gracias al modelos 
    //podremos acceder a los metodos
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }

}

const paginaContacto = (req, res) => {
    res.send('Contacto');
}; 


//* Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    // console.log(req.params.viaje)
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug }})

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto,
    paginaDetalleViaje
}
