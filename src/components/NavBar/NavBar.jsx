// Imports
import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/icon/brillando.png';
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const displayMenu = ()=>{
        setMenuIsOpen(!menuIsOpen)
    }

    const closeMenu = ()=>{
        setMenuIsOpen(false)
        console.log("el booleano del menu es: ", menuIsOpen)
    }

    return(
        <>
        <header className="header">
            <div onClick={displayMenu} className={`menu-btn ${menuIsOpen ? "open" : ""}`}>
                <div className="menu-btn__burger"></div>
            </div>
            <Link to='/'>
                <img src={Logo}  alt="logo Brillandocon" className="header__img"/>
            </Link>
            <CartWidget onClick={closeMenu} displayMenu={displayMenu} menuIsOpen={menuIsOpen}/>
        </header>
        {/* ========== Inicio Nav Desplegable ========== */}
        <nav className={`nav ${menuIsOpen ? "displayMenu" : ""}`} id="nav">
            <div className="navOverlay"></div>
            <div className="nav__list--container">
                <ul className="nav__list">
                    <Link to="/">
                        <li onClick={displayMenu} className="nav__list--item">
                            Inicio
                        </li>
                    </Link>
                    <Link to='/category'>
                        <li onClick={displayMenu} className="nav__list--item">
                            Categorias
                        </li>
                    </Link>
                    <Link to='/about-us'>
                        <li onClick={displayMenu} className="nav__list--item">
                            Sobre Nosotros
                        </li>
                    </Link>
                    <Link to="/contact-us">
                        <li onClick={displayMenu} className="nav__list--item">
                            Contacto
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
        {/* ========== Fin Nav Desplegable ========== */}
        </>

    )
}


export default NavBar
