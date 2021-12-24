import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Error404.css'



const Error404 = () => {
    return(
        <StyledErrorContainer>
            <div className='errorContainer'>
                <StyledErrorTitle className='errorContainer__title'>Ups!</StyledErrorTitle>
                <StyledErrorP>Tal vez quieras redireccionarte...</StyledErrorP>
                <StyledErrorContainer__links>
                    <Link to="/" className='errorContainer__links--category'>
                        Inicio
                    </Link>

                    <Link to="/categoria" className='errorContainer__links--category'>
                        Categorias
                    </Link>
                    <Link to="/about-us" className='errorContainer__links--category'>
                        Sobre Nosotros
                    </Link>
                    <Link to="/contact-us" className='errorContainer__links--category'>
                        Contacto
                    </Link>
                </StyledErrorContainer__links>
            </div>
            <StyledImg src="./assets/error/notFound.png" alt="" className='errorContainer__img'/>
        </StyledErrorContainer>
    )
}

// Styled Components
const StyledErrorContainer = styled.div`
width: 100vw;
margin-top: 10vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

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
const StyledImg = styled.img`
height: 500px;
width: auto;
`

const StyledErrorContainer__links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`

export default Error404 