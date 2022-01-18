import './ItemCount.css'
import React, { useState } from 'react';

// Components
import CartIcon from '../svg/CartIcon'

// Router DOM
import { Link } from 'react-router-dom';


const ItemCount = ({ onAdd, addToCart, stock })=>{
    const [count, setCount]= useState(0)
    const [totalStock, setTotalStock] = useState(stock);

    const handleSumar = ()=>{
            totalStock > count && setCount( count + 1 )
            totalStock > count && onAdd(count + 1)
    }

    const handleRestar = ()=>{
        count >= 1 && setCount( count - 1 )
        onAdd(count - 1)
    }

    const handleComprar = ()=>{
            setCount(0)
            setTotalStock(totalStock - count)
            addToCart()
    }


    return(
        <div className="contador__container">
            <p className="contador__stock">Unidades disponibles: {totalStock}</p>
            <div className="contador">
                <button className={`contador__boton contador__boton--minus ${count === 0 && 'disabled'}`} onClick={handleRestar}>
                    <i className="fas fa-minus"></i>
                </button>
                <span className="contador__cantidad">
                    {count}
                </span>
                <button className="contador__boton" onClick={handleSumar}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className='containerCompra'>
            {
                stock === totalStock ?
                <button className={`contador__comprar ${count === 0 && 'disabled'}`} onClick={handleComprar}>
                    Añadir al carrito
                </button>
                :
                <div className='productoComprado'>
                    <Link to="/">
                        <button className='contador__seguirComprando'>
                        <i className="fas fa-arrow-alt-circle-left productoComprado__icon"></i> Seguir comprando
                        </button>
                    </Link>
                    <Link to="/cart">
                        <button className='contador__finalizarCompra'>
                            <CartIcon width={24} fill={"var(--text-color)"}/> Finalizar Compra
                        </button>
                    </Link>
                </div>
            }
            </div>
        </div>
    )
}


export default ItemCount;
