import React, { useEffect, useState } from "react";
// COMPONENTS
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx'
import Pacman from "../Pacman/Pacman";

// Firebase
import db from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true);
    const [dataItems, setDataItems] = useState([]);

    const getProducts = async (db)=>{
        const productosCol = collection(db,'products');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc=>{
            let product = doc.data();
            product.id = doc.id
            return product
        });
        return productosList;
    };


    useEffect(() => {
        getProducts(db).then((datas)=>{
            setDataItems(datas)
            console.log("entron en la condicien")
            setLoading(false)
        })
    }, []);

    return(
        <>
            {
            loading ?
            <Pacman/>
            :
                <ItemList dataItems={dataItems}/>
            }
        </>
    )
}

export default ItemListContainer