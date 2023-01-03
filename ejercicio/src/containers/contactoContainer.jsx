import React from 'react';
import ContactoComponent from '../componentes/contactoComponent';
import { Contacto } from '../models/contacto';



const ContactoContainer = () => {
    const contactoDefault = new Contacto('Juanito', 'Perez', 'Prueba@gmail.com', false);
    return (
        <div>
            <ContactoComponent contacto={contactoDefault}></ContactoComponent>

        </div>
    );
};




export default ContactoContainer;
