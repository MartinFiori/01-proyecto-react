// Imports
import React, { useState } from 'react';
import './NavBar.css';
// Components
import Logo from '../../assets/icon/brillando.png';
import CartWidget from '../CartWidget/CartWidget.jsx'
import UserIcon from '../svg/UserIcon';
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
                <div className="userContainer">
                    <p className="userName">Martín</p>
                    <UserIcon fill={"var(--primary-color)"} width={45}/>
                </div>
                <CartWidget setMenuIsOpen={setMenuIsOpen} value={menuIsOpen}/>
            </div>
        </header>
        <section className="filterContainer">
            <ul>
                <li>
                    <Link to={"/"}>
                        Todos
                    </Link>
                </li>
                <li>
                    <Link to={"/aritos"}>
                        Aritos
                    </Link>
                </li>
                <li>
                    <Link to={"/articulados"}>
                        Articulados
                    </Link>
                </li>
                <li>
                    <Link to={"/figuras"}>
                        Figuras
                    </Link>
                </li>
                <li>
                    <Link to={"/jardineria"}>
                        Jardinería
                    </Link>
                </li>
                <li>
                    <Link to={"/llaveros"}>
                        Llaveros
                    </Link>
                </li>
                <li>
                    <Link to={"/organizadores"}>
                        Organizadores
                    </Link>
                </li>
            </ul>
        </section>
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
