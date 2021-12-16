import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import Pacman from '../Pacman/Pacman.jsx'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);
    
    return(
        <>
        {        
            loading ?
                <Pacman/>
                :
                <ItemDetail/>
        }
        </>
    )
}

export default ItemDetailContainer 