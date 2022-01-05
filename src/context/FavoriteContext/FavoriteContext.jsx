import React, { createContext, useState } from 'react';
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

    
    
    const info = {
        favorites,
        addFavorites,
        removeFavorite
    }

    return(
        <FavoriteContext.Provider value={info}>
            {children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteContext, FavoriteProvider}