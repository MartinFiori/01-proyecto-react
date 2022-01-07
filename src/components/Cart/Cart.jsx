import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
    const { carrito, deleteItem, handleDecrement,handleIncrement } = useContext(CartContext);
    
    useEffect(() => {
        console.log("productos dentro del cart: ", carrito)
            // console.log(carrito.length)
    }, []);
    
    return(
        <div className='emptyCartContainer'>
                <h2>
                    Su Carrito
                </h2>
                <ul className="emptyCartList">
                    {
                        carrito.length > 0 ?
                        carrito.map((prod, index)=>{
                            return(
                                <li key={index} className='itemList'>
                                    <div className='itemList__details--info'>
                                        <img src={require(`../../../public/assets/cards/${prod.img}`)} alt={`${prod.name}`} className='fotito'/>
                                        <div>
                                            <h3>{prod.name}</h3>
                                            <p>Subtotal: <span>{`$${prod.quantity*prod.price}`}</span></p>
                                        </div>
                                    </div>
                                    <div className="itemList__details--quantity">
                                        <button onClick={()=>handleDecrement(prod.id)}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <span>{prod.quantity}</span>
                                        <button onClick={()=>handleIncrement(prod.id)}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="itemList__details--delete">
                                        <button onClick={()=>deleteItem(prod)}>
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                        :
                        <div className="emptyCart">
                            <img src={require('../../assets/cart/empty-cart.png')} alt="" />
                            <h3>Su carrito está vacío</h3>
                            <Link to="/">
                                <button>
                                    Seguir comprando
                                </button>
                            </Link>
                        </div>
                    }
                </ul>
        </div>
    )
}

export default Cart
