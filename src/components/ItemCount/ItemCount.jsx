import './ItemCount.css'
import React, { useState } from 'react';


const ItemCount = ({ onAdd, addToCart })=>{
    const [count, setCount]= useState(0)

    const handleSumar = ()=>{
            setCount( count + 1 )
            onAdd(count + 1)
        
    }

    const handleRestar = ()=>{
        count >= 1 && setCount( count - 1 )
        onAdd(count - 1)
    }

    const handleComprar = ()=>{
            setCount(
                count-count
            )
            addToCart()
    }


    return(
        <div className="contador__container">
            <p className="contador__stock">Stock disponible!</p>
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
            <div className='containerCompra'>
            {
                count > 0 &&
                <button className="contador__comprar" onClick={handleComprar}>
                    Añadir al carrito
                </button>
            }

            </div>
        </div>
    )
}


export default ItemCount;
