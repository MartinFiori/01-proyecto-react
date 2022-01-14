import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.css'




const EmptyCart = () => {
    return(
        <div className="emptyCart">
        <img src={require('../../assets/cart/empty-cart.png')} alt="" />
        <h3>Su carrito está vacío</h3>
        <Link to="/">
            <button>
                Seguir comprando
            </button>
        </Link>
    </div>
    )
}

export default EmptyCart 