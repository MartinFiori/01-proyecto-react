import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
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
        <div className='cartPage'>
            <div className="cartContainer">
                <h2 className="cartTitle">
                    Su Carrito
                </h2>
                <ul className="cartList">
                    {
                        carrito.length > 0 ?
                        carrito.map((prod, index)=>{
                            return(
                                <li key={index}>
                                    <img src={process.env.PUBLIC_URL + '/emptyCart/cart.png'} alt={`${prod.name}`} />
                                    <h3>{prod.name}</h3>
                                </li>
                            )
                        })
                        :
                        <div className="emptyCart">
                            {/* <img src={require('../../../public/assets/emptyCart/cart.png')} alt="" /> */}
                            <h1>holaa</h1>
                        </div>
                    }
                </ul>
            </div>
        </div>
    )
}

export default CartPage 