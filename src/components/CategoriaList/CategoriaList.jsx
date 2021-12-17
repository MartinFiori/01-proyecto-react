import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { localAPI } from '../config';
import Pacman from '../Pacman/Pacman.jsx'
import Item from '../Item/Item.jsx'
import '../ItemListContainer/ItemListContainer.css'

const CategoriaList = () => {
    const [ loading, setloading ] = useState(true);
    const [ category, setCategory ] = useState([]);
    const { idCategory } = useParams();

    const requestCategory = new Promise((resolve)=>{
        resolve( localAPI );
    });

    useEffect(() => {
        requestCategory.then((resultCategories)=>{
            setTimeout(() => {
                setloading(false)
            }, 2000);
            const filteredCategory = resultCategories.filter(resultCategory=>{
                return(resultCategory.category === idCategory)
            });
            setCategory(filteredCategory)
        });
    }, []);

    return(
        <>
            {
                loading ?
                <Pacman/>
                :
                <div className="cards__container">
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

export default React.memo(CategoriaList)