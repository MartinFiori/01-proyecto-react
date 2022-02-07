import React, { useState } from 'react'
import './ItemList.css'

// Components
import Item from "../Item/Item.jsx";


const ItemList = ({dataItems})=>{
    const [search, setSearch] = useState('');
    
    return(
        <>
            <div className='searcher-container'>
                <input type="text" placeholder='Buscar...' className='searcher--text' onChange={(e)=>{setSearch(e.target.value)}}/>
                <i className="fas fa-search searcher--search-icon"></i>
            </div>
            <div className="cards__container">
                {
                    dataItems.filter(value=>{
                        if(search == ''){
                            return value
                        }
                        if (value.name.toLowerCase().includes(search.toLowerCase())){
                            return value
                        }
                    }).map((prod, index)=>{
                        return(
                        <Item key={index} data={prod}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemList