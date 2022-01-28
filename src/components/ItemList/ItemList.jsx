import React from 'react'
import Item from "../Item/Item.jsx";


const ItemList = ({dataItems})=>{

    
    return(
        <div className="cards__container">
            {
            dataItems.map((prod, index)=>{
                return(
                    <Item key={index} data={prod}/>
                )
            })
            }
        </div>
    )
}

export default ItemList