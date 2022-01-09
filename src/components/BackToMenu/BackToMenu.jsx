// Components
import React from 'react';
import './BackToMenu.css'
import BackIcon from '../svg/BackIcon'
import { Link } from 'react-router-dom';


const BackToMenu = () => {
    
    return(
        <div className='backToMenuContainer'>
            <Link to={"/"}>
                <div className="backToMenuContainer__inner">
                        <BackIcon fill={"white"} width="24px" style={{ height: 24, width: 24 }} className="backIcon"/>
                    <p>Volver al menu principal</p>
                </div>
            </Link>
        </div>
    )
}

export default BackToMenu 