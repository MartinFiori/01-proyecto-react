import React, {createContext, useState, useEffect} from 'react';
import { createRoutesFromChildren } from 'react-router-dom';

const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart' || "[]"))


const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(cartFromLocalStorage);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartLength, setCartLength] = useState(0);
    
    useEffect(() => {
        setTotalPrice(total)
        setCartLength(cartLengthReduce)
        localStorage.setItem('cart',JSON.stringify(carrito))
        console.log("la cantidad de items en el cart es de: ",cartLength);
    }, [carrito]);

    const eliminarTodo = ()=>{
        setCarrito([])
    }

    const cartLengthReduce = carrito.reduce((acc, el)=> acc+ el.quantity, 0)

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
            setCarrito(carrito=> [...carrito, item]);

        localStorage.setItem('cart', JSON.stringify(item))
    }
    
    const deleteItem = (item) =>{
        setCarrito(carrito.filter(x=> x.id !== item.id))
    }

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


    const carritoData = {
        carrito,
        setCarrito,
        addProducts,
        deleteItem,
        totalPrice,
        eliminarTodo,
        cartLength,
        handleIncrement,
        handleDecrement,
    }


    
    return (
        <CartContext.Provider value={carritoData}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider};