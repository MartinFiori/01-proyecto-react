import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { localAPI } from '../config';
import Pacman from '../Pacman/Pacman.jsx'
import Item from '../Item/Item.jsx'
import './CategoriaList.css'

const CategoriaList = () => {
    const [ loading, setloading ] = useState(true);
    const [ category, setCategory ] = useState([]);
    const { idCategory } = useParams();
    const productoFiltrado = []

    const requesCategory = new Promise((resolve)=>{
        resolve( localAPI );
    });

    useEffect(() => {
        requesCategory.then((resultCategories)=>{
            resultCategories.filter(resultCategory=>{
                if (resultCategory.category === idCategory) {
                    console.log(resultCategory)
                    setCategory(resultCategory)
                }
                setTimeout(() => {
                    setloading(false)
                }, 2000);

            })
        });
    }, []);

    return(
        <>
            {
                loading ?
                <Pacman/>
                :
                <div>
                {
                category.map((prod, index)=>{
                    return(
                        <Item key={index} data={prod}/>
                    )
                })
                }
                </div>
            }
        </>
    )
}

export default CategoriaList 