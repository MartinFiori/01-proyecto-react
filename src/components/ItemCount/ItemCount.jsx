import './ItemCount.css'
import React, { useState } from 'react';


const ItemCount = ({stock})=>{
    const [count, setCount]= useState(0)
    let [totalStock, setTotalStock]= useState(stock)

    const handleSumar = ()=>{
        count < totalStock && setCount( count + 1 )  
    }

    const handleRestar = ()=>{
        count >= 1 && setCount( count - 1 )
    }

    const handleComprar = ()=>{
            setCount(
                count-count
            )

            setTotalStock(
                totalStock-count
            )
    }

    return(
        <div className="contador__container">
            <p className="contador__stock">Stock disponible:{totalStock}</p>
            <div className="contador">
                <button className="contador__boton" onClick={handleRestar}>
                    &minus;
                </button>
                <span className="contador__cantidad">
                    {count}
                </span>
                <button className="contador__boton" onClick={handleSumar}>
                &#43;
                </button>
            </div>
            <button className="contador__comprar" onClick={handleComprar}>
                Añadir al carrito
            </button>
        </div>
    )
}


export default ItemCount;
