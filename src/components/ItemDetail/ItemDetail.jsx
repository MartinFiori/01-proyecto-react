import React from 'react';
import './ItemDetail.css'
import Img from '../../assets/cards/kurama.jpg'
import ItemCount from '../ItemCount/ItemCount.jsx'


const ItemDetail = () => {
    return(
        <div className="detailContainer">
            <img src={Img} className="detailContainer__img" alt="nekoNegro"/>
            <section className="detail">
                <div className="detail__header">
                    <h2 className="detail__header--title">titulo</h2>
                    <p className="detail__header--price">$400</p>
                </div>
                <p className="detail__description">description</p>
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
                <ItemCount/>

            </section>
        </div>
    )
}

export default ItemDetail 