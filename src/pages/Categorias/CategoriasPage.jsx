import React, { useEffect, useState } from 'react';
import './CategoriasPage.css'
import { localAPI } from '../../components/config';
import { useParams } from 'react-router-dom';
import Pacman from '../../components/Pacman/Pacman';
import { Link } from 'react-router-dom'


const CategoriasPage = ({data}) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);

    const getCategory = new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(localAPI)
        }, 2000);
    })

    useEffect(() => {
        getCategory.then((resultCategories)=>{
            resultCategories.filter((resultCategory)=>{
                if (resultCategory.category === parseInt(id)) {
                    setCategory(resultCategory)
                }
            })
            setLoading(false)
        })
    }, []);

    return(
        <>
{        
        loading ?
        <Pacman/>
        :
        <div className='CategoriasPage'>
            <Link to={`/category/figuras`}>
            <button className='category'>Figuras</button>
            </Link>
            <Link to={`/category/llaveros`}>
            <button className='category'>Llaveros</button>
            </Link>
            <Link to={`/category/organizadores`}>
            <button className='category'>Organizadores</button>
            </Link>
            <Link to={`/category/jardineria`}>
            <button className='category'>Jardinería</button>
            </Link>
            <Link to={`/category/aritos`}>
            <button className='category'>Aritos</button>
            </Link>
            <Link to={`/category/articulados`}>
            <button className='category'>Articulados</button>
            </Link>
        </div>
        }
    </>
    )
}

export default CategoriasPage 