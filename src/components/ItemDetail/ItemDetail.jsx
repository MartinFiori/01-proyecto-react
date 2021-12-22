import React, {useState} from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'


const ItemDetail = ({item}) => {
    const [itemCart, setItemCart] = useState(
        {
            id: item.id,
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
    };
    return(
        <div className="detailContainer">
            <img src={require(`../../assets/cards/${item.img}`)} className="detailContainer__img" alt={item.name}/>
            <section className="detail">
                <div className="detail__header">
                    <h2 className="detail__header--title">{item.name}</h2>
                    <p className="detail__header--price">${item.price}</p>
                </div>
                <p className="detail__description"><i className="far fa-money-bill-alt detail__bill"></i> <span className="detail__discount"> 10%</span> de descuento pagando por transferencia bancaria</p>
                <form className="detailForm">
                    <div>
                        <label htmlFor="color" className='detailForm--label'>Color:</label>
                        <select name="color" id="option" className='detailForm--select'>
                            <option value="nekoNegro" className='detailForm--option'>negro</option>
                            <option value="nekoAzul" className='detailForm--option'>azul</option>
                            <option value="nekoVioleta" className='detailForm--option'>violeta</option>
                        </select>
                    </div>
                </form>
                <ItemCount stock={item.stock} onAdd={onAdd} addToCart={addToCart}/>

            </section>
        </div>
    )
}

export default ItemDetail 