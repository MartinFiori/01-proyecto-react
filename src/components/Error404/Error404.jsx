import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Error404.css'
import styled from 'styled-components';



const Error404 = () => {
    return(
            <div className="styledContainer">
                <div className='errorContainer'>
                    <StyledErrorTitle className='errorContainer__title'>Ups!</StyledErrorTitle>
                    <StyledErrorP>Tal vez quieras redireccionarte...</StyledErrorP>
                    <div className='StyledErrorContainer__links'>
                        <Link to="/" className='errorContainer__links--category'>
                            Inicio
                        </Link>
                        <Link to="/about-us" className='errorContainer__links--category'>
                            Sobre Nosotros
                        </Link>
                        <Link to="/contact-us" className='errorContainer__links--category'>
                            Contacto
                        </Link>
                    </div>
                </div>
                <img className='errorContainer__img' src="./assets/error/notFound.png" alt="página no encontrada" />
            </div>
    )
}



const StyledErrorTitle = styled.h1`
    font-size: 6rem;
    text-align: center;
    color: var(--primary-color);
`
const StyledErrorP = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-color);
    text-align: center;

`

export default Error404 