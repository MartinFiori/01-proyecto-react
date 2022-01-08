import React, { useEffect, useState } from "react";
// COMPONENTS
import './ItemListContainer.css'
import { localAPI } from "../config";
import ItemList from '../ItemList/ItemList.jsx'
import Pacman from "../Pacman/Pacman";

// React ROUTER
import { useParams } from "react-router-dom";
// Firebase
import db from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true);
    const [dataItems, setDataItems] = useState([]);
    const {category} = useParams();

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
            console.log(category);
            console.log(datas);
                if (category) {
                    datas.filter(data=>{
                        if (data.category === category) {
                            setDataItems(x=> [...x,data])
                            setLoading(false)
                        }
                    })
                } else {
                    setDataItems(datas)
                    console.log("entron en la condicien")
                    setLoading(false)
                }
        })
    }, []);

    return(
        <>
        {
            loading ?
            <Pacman/>
            :
            <div>
                <ItemList dataItems={dataItems}/>
            </div>
        }
        </>
    )
}

export default ItemListContainer