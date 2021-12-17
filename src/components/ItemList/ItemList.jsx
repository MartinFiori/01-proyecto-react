import React, { useEffect, useState } from "react";
import { localAPI } from "../config";
import './ItemList.css'
import Pacman from "../Pacman/Pacman";
import Item from "../Item/Item.jsx";

const ItemList = ()=>{
    const [loading, setLoading] = useState(true)
    const [dataItems, setDataItems] = useState([])
    const productos = localAPI

    const requesData = new Promise((resolve, reject)=>{
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
            <div className="cards__container">
            {
            dataItems.map((prod, index)=>{
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

export default ItemList