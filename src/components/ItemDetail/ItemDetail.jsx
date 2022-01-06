import React, { useState, useContext} from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { CartContext } from '../../context/CartContext/CartContext';


const ItemDetail = ({item}) => {
    const { addProducts } = useContext(CartContext)
    const [itemCart, setItemCart] = useState(
        {
            id: item.id,
            img: item.img,
            stock: item.stock,
            price: item.price,
            name: item.name,
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
            <img src={require(`../../assets/cards/${item.img}`)} className="detailContainer__img" alt={item.name}/>
            <section className="detail">
                <div className="detail__header">
                    <h2 className="detail__header--title">{item.name}</h2>
                    <p className="detail__header--price">{`$${item.price}`}</p>
                </div>
                <p className="detail__description"><i className="far fa-money-bill-alt detail__bill"></i> <span className="detail__discount"> 10%</span> de descuento pagando por transferencia bancaria</p>
                <form className="detailForm">
                    <div>
                        <label htmlFor="color" className='detailForm--label'>Color:</label>
                        <select name="color" id="option" className='detailForm--select'>
                            <option defaultValue={""} className='detailForm--option' readOnly>Elija el color</option>
                            <option value={"rosa"} className='detailForm--option'>Rosa</option>
                            <option value={"negro"} className='detailForm--option'>Negro</option>
                            <option value={"azul"} className='detailForm--option'>Azul</option>
                            <option value={"rojo"} className='detailForm--option'>Rojo</option>
                            <option value={"verde"} className='detailForm--option'>Verde</option>
                        </select>
                    </div>
                </form>
                <ItemCount onAdd={onAdd} stock={item.stock} addToCart={addToCart}/>
            </section>
        </div>
    )
}

export default ItemDetail 