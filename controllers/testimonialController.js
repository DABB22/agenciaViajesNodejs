
import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {

    //* Validar información del formulario
    const { nombre, correo, mensaje } = req.body

    const errores = [];

    if (nombre.trim() === '') { //trim quita espacios en blanco al inicio y al final
        errores.push({mensaje:'El nombre está vacío'})
    }

    if (correo.trim() === '') { //trim quita espacios en blanco al inicio y al final
        errores.push({mensaje:'El correo está vacío'})
    }

    if (mensaje.trim() === '') { //trim quita espacios en blanco al inicio y al final
        errores.push({mensaje:'El mensaje está vacío'})
    }

    // console.log(errores);

    //* Mostrar una vista con los errores y la info digitadata en los inputs
    if(errores.length > 0) {

        //*Testiminiales existentes
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales

        })
    }else {
        //*Almacenar la información en la BD

        //usaremos un try catch en caso de que haya un error poderlo validar.
        try {
            //con esto al dar enviar los datos se guardan en la tabla de la BD
            await Testimonial.create({
                nombre,
                correo,
                mensaje,
            });

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
}