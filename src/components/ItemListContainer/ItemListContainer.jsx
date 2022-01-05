import React, { useContext, useEffect, useState } from "react";
import { localAPI } from "../config";
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx'
import Pacman from "../Pacman/Pacman";
import { FavoriteContext } from "../../context/FavoriteContext/FavoriteContext";


const ItemListContainer = () =>{
    const { favorites } = useContext(FavoriteContext)
    const [loading, setLoading] = useState(true)
    const [dataItems, setDataItems] = useState([])
    const productos = localAPI

    const requesData = new Promise((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })

    useEffect(() => {
        requesData.then((data)=>{
                console.log(`los productos son estos:`, data)
                setDataItems(data)
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
        <button onClick={()=> console.log(favorites) }>
            ver item likeados
        </button>
        </>
    )
}

export default ItemListContainer