import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'

const CartPage = () => {
    const { carrito, setCarrito, deleteItem } = useContext(CartContext);
    
    useEffect(() => {
        console.log("productos dentro del cart: ", carrito)
            // console.log(carrito.length)
    }, []);

    const handleIncrement = (card_id)=>{
        setCarrito(cart =>
            cart.map((item)=>
                card_id === item.id ? {...item, quantity: item.quantity + ((item.stock > item.quantity ? 1:0))} : item
            )
        )
    }
    const handleDecrement = (card_id)=>{
        setCarrito(cart =>
            cart.map((item)=>
                card_id === item.id ? {...item, quantity: item.quantity - (item.quantity > 1 ? 1:0)} : item
            )
        )
    }


    
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
                                <li key={index} className='empty'>
                                    <img src={require(`../../../public/assets/cards/${prod.img}`)} alt={`${prod.name}`} className='fotito'/>
                                    <h3>{prod.name}</h3>
                                    <button className='botones' onClick={()=>handleIncrement(prod.id)}>SUMAR</button>
                                    <p>{prod.quantity}</p>
                                    <button className='botones' onClick={()=>handleDecrement(prod.id)}>RESTAR</button>
                                    <p>{prod.price}</p>
                                    <p className='textito'>{prod.price*prod.quantity}</p>

                                    <button className='botones' onClick={()=>deleteItem(prod)}> BORRAAR TODO</button>
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

export default CartPage 