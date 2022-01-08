import React, { useEffect, useState } from 'react';
// COMPONENTS
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import Pacman from '../Pacman/Pacman.jsx'
// Router-DOM
import { useParams } from 'react-router-dom';
// Firebase
import db from '../../Firebase.js';
import {collection, getDocs} from 'firebase/firestore'
import BackToMenu from '../BackToMenu/BackToMenu.jsx';

const ItemDetailContainer = () => {
    console.log('parametros por ruta', useParams());
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const { id } = useParams();


    // const getItem = new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve(localAPI)
    //     }, 500);
    // })

    const getProducts = async (db)=>{
        const productosCol = collection(db,'products');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc=>{
            let product = doc.data();
            console.log(product);
            console.log(doc.id);
            product.id = doc.id
            return product
        });
        return productosList;
    };


    useEffect(() => {
        getProducts(db).then(resultProducts=>{
            resultProducts.filter((resultProduct)=>{
                if (resultProduct.id === id) {
                    setItem(resultProduct)
                    setLoading(false)
                }
            })
        })
    }, [db])
    
    return(
        <>
        <BackToMenu/>
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