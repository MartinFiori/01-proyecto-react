import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemCount  from '../../components/ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx'
import Home from '../../pages/Home/Home.jsx'
import Error404 from '../../pages/Error404/Error404.jsx'



const AppRouter = () => {
    return(
        <BrowserRouter>
            <NavBar/> 
                <Routes>
                    <Route path='/products' element ={<ItemListContainer/>}/>
                    <Route path='/detail' element ={<ItemDetailContainer/>}/>
                    <Route path='/' element ={<Home/>}/>
                    <Route path='*' element ={<Error404/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRouter 
