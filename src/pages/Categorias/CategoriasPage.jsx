import React, { useEffect, useState } from 'react';
import './CategoriasPage.css'
import { localAPI } from '../../components/config';
import { useParams } from 'react-router-dom';
import Pacman from '../../components/Pacman/Pacman';
import { Link } from 'react-router-dom'


const CategoriasPage = () => {
    const { idCategory } = useParams();
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
                if (resultCategory.category === idCategory) {
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