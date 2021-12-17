import React from 'react';
import './CategoriasPage.css'
import { Link } from 'react-router-dom'


const CategoriasPage = () => {
    return(
        <>
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
    </>
    )
}

export default CategoriasPage 