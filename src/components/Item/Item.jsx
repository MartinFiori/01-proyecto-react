import React, {useState, useContext} from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext.jsx'

const Item =({data})=>{
    const [liked, setLiked] = useState(false);
    const { addFavorites, removeFavorite } = useContext(FavoriteContext)
    const [favorite] = useState(
        {
            id: data.id,
            img: data.img,
            price: data.price,
            name: data.name,
        }
    );

    const sendFavorite = ()=>{
        if (!liked) {
            addFavorites(favorite)
            console.log("el favorito es true: ", favorite);
        } else{
            removeFavorite(favorite)
            console.log("el favorito es falso: ", favorite);
        }
    }
    
    return(
        <div className="card">
            <section className="card__header">
                <h3 className="card__header--title">{data.name}</h3>
                <p className="card__header--price">{`$${data.price}`}</p>
            </section>
            <img className="card__img" src={require(`../../assets/cards/${data.img}`)} alt={data.name} />
            <p className="card__description">
                {data.description}
            </p>
            <section className="card__buttons">
                <Link to={`/detail/${data.id}`}>
                    <button className="card__buttons--buy">Ver Producto</button>
                </Link>
                <div className="card__buttons--container">
                    <i className={`far fa-heart card__buttons--icon ${liked && "fas card__buttons--heart"}`} onClick={()=> {setLiked(!liked); sendFavorite()}}></i>
                    <i className="fas fa-share-alt card__buttons--icon" onClick={(e)=> {navigator.clipboard.writeText(e.target.parentElement.parentElement.firstChild.href)}}></i>
                </div>
            </section>
        </div>
    )
}

export default Item