import React, { useState, useContext} from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
    const { addProducts } = useContext(CartContext)
    const { id, img, stock, price, name } = item
    const [itemCart] = useState(
        {
            id: id,
            img: img,
            stock: stock,
            price: price,
            name: name,
            quantity: 0
        }
    );
    
    const onAdd = (value) =>{
        console.log("items agregados", value);
        itemCart.quantity = value
    }

    const addToCart = ()=>{
        console.log("itemCart: ", itemCart);
        addProducts(itemCart)
    };
    return(
        <div className="detailContainer">
            <Link to={`/detail`}>
            <img src={require(`../../assets/cards/${img}`)} className="detailContainer__img" alt={name}/>
            </Link>
            <section className="detail">
                <div className="detail__header">
                    <h2 className="detail__header--title">{name}</h2>
                    <p className="detail__header--price">{`$${price}`}</p>
                </div>
                <p className="detail__description"><i className="far fa-money-bill-alt detail__bill"></i> <span className="detail__discount"> 10%</span> de descuento pagando por transferencia bancaria</p>
                <ItemCount onAdd={onAdd} stock={stock} addToCart={addToCart}/>
            </section>
        </div>
    )
}

export default ItemDetail 