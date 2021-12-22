// Imports
import React from 'react';
import './NavBar.css';
import Logo from '../../assets/icon/brillando.png';
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const displayMenu = ()=>{
        document.getElementById('nav').classList.toggle("displayMenu")
        document.querySelector('.menu-btn').classList.toggle('open')
    }
    return(
        <>
        <header className="header">
            <div onClick={displayMenu} className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <Link to='/products'>
                <img src={Logo}  alt="logo Brillandocon" className="header__img"/>
            </Link>
            <CartWidget/>
        </header>
            <nav className="nav" id="nav">
                <div className="navOverlay"></div>
                <div className="nav__list--container">
                    <ul className="nav__list">
                        <Link to="/">
                            <li onClick={displayMenu} className="nav__list--item">Inicio</li>
                        </Link>
                        <Link to='/products'>
                            <li onClick={displayMenu} className="nav__list--item">Productos</li>
                        </Link>
                        <Link to='/category'>
                            <li onClick={displayMenu} className="nav__list--item">Categorias</li>
                        </Link>
                        <li onClick={displayMenu} className="nav__list--item">Contacto</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default NavBar
