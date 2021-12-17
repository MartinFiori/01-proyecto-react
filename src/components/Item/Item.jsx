import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item =({data})=>{

    
    return(
        <div className="card">
            <section className="card__header">
                <h3 className="card__header--title">{data.name}</h3>
                <p className="card__header--price">$ {data.price}</p>
            </section>
            <img className="card__img" src={`./assets/cards/${data.img}`} alt={data.name} />
            <p className="card__description">
                {data.description}
                <i className="fas fa-info-circle description--circle"></i>
            </p>
            <section className="card__buttons">
                <Link to={`/detail/${data.id}`}>
                    <button id={data.id} className="card__buttons--buy">Comprar</button>
                </Link>
                <div className="card__buttons--container">
                    <i className="far fa-heart card__buttons--icon"></i>
                    <i className="fas fa-share-alt card__buttons--icon"></i>
                </div>
            </section>
        </div>
    )
}

export default Item