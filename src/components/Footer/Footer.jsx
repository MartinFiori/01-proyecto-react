import React from 'react';
import './Footer.css';

// Link
import { Link } from 'react-router-dom';

// Components
import Facebook from '../svg/socialMedia/Facebook';
import Instagram from '../svg/socialMedia/Instagram';
import Whatsapp from '../svg/socialMedia/Whatsapp';



const Footer = () => {
    const size = "40"
    const fillColor = "#fff"
    return(
        <footer className='footer-container'>
            <div className="redes-container">
                <a href="https://www.facebook.com/EstoyBrillandoCon/" target={"_blank"}>
                    <Facebook width={size} height={size} fill={fillColor} className="facebook"/>
                </a>
                <a href="https://www.instagram.com/estoybrillandocon/?hl=es" target={"_blank"}>
                    <Instagram width={size} height={size} fill={fillColor} className="instagram"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+5491140699688&text=Hola! Quería consultarte sobre un producto!" target={"_blank"}>
                    <Whatsapp width={size} height={size} fill={fillColor} className="whatsapp"/>
                </a>
            </div>
            <div className="links-container">
                <Link to="/" className='links-container--anchor'>
                    Inicio
                </Link>
                <Link to="/contact-us" className='links-container--anchor'>
                    Contáctenos
                </Link>
                <Link to="/about-us" className='links-container--anchor'>
                    Nosotros
                </Link>
            </div>
            <p className='copyright'><a href="https://www.linkedin.com/in/martin-fiori-551669144/" className='name'>Martín Fiori </a>&copy; All rights reserved</p>
        </footer>
    )
}

export default Footer 