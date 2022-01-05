import React, { createContext, useState } from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const info = {
        favorites
    }

    return(
        <FavoriteContext.Provider value={info}>
            {children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteContext, FavoriteProvider}