import React, { createContext, useState, useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    
    const addFavorites = (itemLikeado) => {
        setFavorites([...favorites, itemLikeado])
    }

    const removeFavorite = (item)=>{
        setFavorites(favorites.filter(prod => prod.id !== item.id))
    }

    
    useEffect(() => {
        if ('favorites' in localStorage) {
            setFavorites(JSON.parse(localStorage.getItem('favorites')))
        }
    }, []);
    
    const info = {
        favorites,
        addFavorites,
        removeFavorite,
        setFavorites
    }

    return(
        <FavoriteContext.Provider value={info}>
            {children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteContext, FavoriteProvider}