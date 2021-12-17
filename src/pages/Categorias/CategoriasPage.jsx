import React, { useEffect, useState } from 'react';
import './CategoriasPage.css'
import Pacman from '../../components/Pacman/Pacman';
import { Link } from 'react-router-dom'


const CategoriasPage = () => {
    const [loading, setLoading] = useState(true);



useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000);
}, []);



    return(
        <>
{        
        loading ?
        <Pacman/>
        :
        <div className='CategoriasPage'>
            <Link to={`/category/figuras`} className='category'>
                Figuras
            </Link>
            <Link to={`/category/llaveros`} className='category'>
                Llaveros
            </Link>
            <Link to={`/category/organizadores`} className='category'>
                Organizadores
            </Link>
            <Link to={`/category/jardineria`} className='category' >
                Jardinería
            </Link>
            <Link to={`/category/aritos`} className='category'>
                Aritos
            </Link>
            <Link to={`/category/articulados`} className='category'>
                Articulados
            </Link>
        </div>
        }
    </>
    )
}

export default CategoriasPage 