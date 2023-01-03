import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto';


const ContactoComponent = ({ contacto }) => {
    const [conectado, setconectado] = useState(false);
    const cambiarStatus = () => {

        if (conectado) {
            setconectado(false);
            contacto.conectado = conectado;
        } else {
            setconectado(true);
            contacto.conectado = conectado;
        }

    }
    return (
        <div>
            <h3>Nombre: {contacto.nombre}</h3>
            <h3>Apellido: {contacto.apellido}</h3>
            <h3>Email: {contacto.email}</h3>
            <h4>Conectado: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h4>


            <div>
                <button onClick={cambiarStatus}>
                    Cambiar Status
                </button>
            </div>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
