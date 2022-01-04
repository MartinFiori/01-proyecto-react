import React, {createContext, useState, useEffect} from 'react';
import { createRoutesFromChildren } from 'react-router-dom';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        setTotalPrice(total)
    }, [carrito]);

    const total = carrito.reduce((acc, el)=> acc + (el.quantity * el.price),0)


    const addProducts = (item) =>{
        let exist = carrito.find(prod => prod.id === item.id)
        exist ?
        setCarrito(carrito.map(
            prod=> prod.id === item.id ?
            {...exist, quantity: exist.quantity + item.quantity}
            :
            prod))
            :
            setCarrito(carrito=> [...carrito, item])
    }
    
    const deleteItem = (item) =>{
        let found = carrito.filter(product => product.id !== item.id);
        setCarrito(found);
    }



    const carritoData = {
        carrito,
        addProducts,
        deleteItem,
        totalPrice
    }


    
    return (
        <CartContext.Provider value={carritoData}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider};