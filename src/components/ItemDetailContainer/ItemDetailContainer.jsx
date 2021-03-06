import React, { useEffect, useState } from 'react';
// COMPONENTS
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import Pacman from '../Pacman/Pacman.jsx'
// Router-DOM
import { useParams } from 'react-router-dom';
// Firebase
import db from '../../Firebase.js';
import {doc, getDoc} from 'firebase/firestore'
import BackToMenu from '../BackToMenu/BackToMenu.jsx';

const ItemDetailContainer = () => {
    console.log('parametros por ruta', useParams());
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const { id } = useParams();

    const getProduct = async (db)=>{
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("document data: ", docSnap.data());
            let producto = docSnap.data();
            producto.id = docSnap.id;
            setItem(producto)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProduct(db)
        console.log("esto es lo que pasa",db)
    }, [id])
    
    return(
        <>
        <BackToMenu place={'/'}/>
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