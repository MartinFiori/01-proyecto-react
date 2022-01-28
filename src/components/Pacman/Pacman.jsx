import React from 'react';
import './Pacman.css'
import PacmanLoader from "react-spinners/PacmanLoader";

const Pacman = () => {
    return(
        <div className="pacmanContainer">
            <PacmanLoader color='#1da1b0' size={75}/>
        </div>
    )
}

export default Pacman 