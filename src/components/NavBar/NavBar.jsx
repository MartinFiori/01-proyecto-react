// Imports
import React, { useState } from 'react';
import './NavBar.css';
// Components
import Logo from '../../assets/icon/brillando.png';
import CartWidget from '../CartWidget/CartWidget.jsx'
// Router Dom
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState([false, false]);

    const displayMenu = ()=>{
        setMenuIsOpen([!menuIsOpen[0], false])
    }



    return(
        <>
        <header className="header">
            <div onClick={displayMenu} className={`menu-btn ${menuIsOpen[0] ? "open" : ""}`}>
                <div className="menu-btn__burger"></div>
            </div>
            <Link to='/'>
                <img src={Logo}  alt="logo Brillandocon" className="header__img" onClick={()=>setMenuIsOpen([false,false])}/>
            </Link>
            <div className='iconContainer'>
                <CartWidget setMenuIsOpen={setMenuIsOpen} value={menuIsOpen}/>
            </div>
        </header>
        {/* ========== Inicio Nav Desplegable ========== */}
        <nav className={`nav ${menuIsOpen[0] ? "displayMenu" : ""}`} id="nav">
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
