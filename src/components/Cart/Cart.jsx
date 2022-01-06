import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'

const CartPage = () => {
    const { carrito } = useContext(CartContext);
    
    useEffect(() => {
        console.log("productos dentro del cart: ", carrito)
            console.log(carrito.length)
    }, []);

    const subTotal = ()=>{

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
                                <li key={index}>
                                    <img src={require(`../../../public/assets/cards/${prod.img}`)} alt={`${prod.name}`} />
                                    <h3>{prod.name}</h3>
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