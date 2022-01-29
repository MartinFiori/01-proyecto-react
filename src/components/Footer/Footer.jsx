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
        <div className='footer-container'>
            <div className="redes-container">
                <a href="https://www.facebook.com/EstoyBrillandoCon/" target={"_blank"}>
                    <Facebook width={size} height={size} fill={fillColor}/>
                </a>
                <a href="https://www.instagram.com/estoybrillandocon/?hl=es" target={"_blank"}>
                    <Instagram width={size} height={size} fill={fillColor}/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+5491140699688" target={"_blank"}>
                    <Whatsapp width={size} height={size} fill={fillColor}/>
                </a>
            </div>
            <div className="links-container">
                <Link to="/">
                    Inicio
                </Link>
                <Link to="/contact-us">
                    Contáctenos
                </Link>
                <Link to="/about-us">
                    Nosotros
                </Link>
            </div>
            <p className='copyright'>&copy; All rights reserved</p>
        </div>
    )
}

export default Footer 