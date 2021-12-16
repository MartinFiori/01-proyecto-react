import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import Pacman from '../Pacman/Pacman.jsx'
import Img1 from '../../assets/cards/kurama.jpg'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])
    const dataProduct =
        {
            id:1,
            name: "Kurama",
            price: 1919,
            description: "Un pato que se adapta a vos",
            stock: 30,
            img: Img1
        }
    


    const getItem = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(dataProduct)
            setLoading(false)
        }, 2000);
    })

    useEffect(() => {
        getItem.then((data)=>{
            console.log("la promesa es:", data);
            setItem(data)
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