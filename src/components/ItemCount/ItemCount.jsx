import './ItemCount.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({stock, onAdd, addToCart})=>{
    const [count, setCount]= useState(0)
    let [totalStock, setTotalStock]= useState(stock)

    const handleSumar = ()=>{
        if (count < totalStock) {
            setCount( count + 1 )
            onAdd(count + 1)
        }
        
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
            addToCart()
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
            <div className='containerCompra'>
                <Link to="/products">
                    <button className="contador__comprar" onClick={handleComprar}>
                        Añadir al carrito y seguir comprando
                    </button>
                </Link>
                <Link to="/cart">
                    <button className='contador__seguirComprando'>
                        Finalizar Compra
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default ItemCount;
