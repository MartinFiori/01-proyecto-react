import React from 'react'
import './ItemList.css'
import Item from "../Item/Item.jsx";
import styled from 'styled-components';

const StyledHeader = styled.h1`
font-size: 2.8rem;
text-align: center;
padding: 2rem;
background: var(--text-color);
font-weight: bold;
`
const ItemList = ({dataItems})=>{

    
    return(
        <>
            <div className="cards__container">
                {
                dataItems.map((prod, index)=>{
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