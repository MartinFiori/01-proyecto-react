import React, {useState, useContext, useEffect} from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item =({data})=>{
    const [liked, setLiked] = useState(false);
    const [itemCopied, setItemCopied] = useState(false);
    const { name, price, img, id } = data

    const copied = () =>{
        setItemCopied(true)
        setTimeout(() => {
            setItemCopied(false)
        }, 2000);
    }
    
    return(
        <div className="card">
            <section className="card__header">
                <h3 className="card__header--title">{name}</h3>
                <p className="card__header--price">{`$${price}`}</p>
            </section>
            <img className="card__img" src={require(`../../assets/cards/${img}`)} alt={name} />
            <section className="card__buttons">
                <Link to={`/detail/${id}`}>
                    <button className="card__buttons--buy">Ver Producto</button>
                </Link>
                <div className="card__buttons--container">
                    <i className={`far fa-heart card__buttons--icon ${liked && "fas card__buttons--heart"}`} onClick={()=> setLiked(!liked)}></i>
                    <i className={`fas fa-share-alt card__buttons--icon`} onClick={(e)=> {navigator.clipboard.writeText(e.target.parentElement.parentElement.firstChild.href); copied()}}></i>
                    <p className={`copied ${itemCopied ? "copied--active" : ""}`}>¡Copiado!</p>
                </div>
            </section>
        </div>
    )
}

export default Item