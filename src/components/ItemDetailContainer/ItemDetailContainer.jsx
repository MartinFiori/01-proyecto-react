import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { localAPI } from '../config.js';
import Pacman from '../Pacman/Pacman.jsx'

const ItemDetailContainer = () => {
    console.log('parametros por ruta', useParams());
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const { id } = useParams();


    const getItem = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(localAPI)
        }, 2000);
    })

    useEffect(() => {
        getItem.then(resultProducts=>{
            resultProducts.filter((resultProduct)=>{
                if (resultProduct.id === parseInt(id)) {
                    setItem(resultProduct)
                    setLoading(false)
                }
            })
        })
    }, [])
    
    return(
        <>
        {        
            loading ?
                <Pacman/>
                :
                <ItemDetail item={item}/>
        }
        </>
    )
}

export default ItemDetailContainer 