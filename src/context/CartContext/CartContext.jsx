import React, {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addProducts = (product) =>{
        setCarrito([...carrito, product ])
    }
    
    const carritoData = {
        carrito,
        addProducts
    }
    
    return (
        <CartContext.Provider value={carritoData}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider};