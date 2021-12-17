import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx'
import Home from '../../pages/Home/Home.jsx'
import Error404 from '../../pages/Error404/Error404.jsx'
import CategoriasPage from '../../pages/Categorias/CategoriasPage.jsx'
import CategoryPageFunca from '../../pages/CategoriasPageFunca/CategoriasPageFunca.jsx'

const AppRouter = () => {
    return(
        <BrowserRouter>
            <NavBar/> 
                <Routes>
                    <Route path='/category/:id' element ={<CategoryPageFunca/>}/>
                    <Route path='/detail/:id' element ={<ItemDetailContainer/>}/>
                    <Route path='/category' element ={<CategoriasPage/>}/>
                    <Route path='/products' element ={<ItemListContainer/>}/>
                    <Route path='/' element ={<Home/>}/>
                    <Route path='*' element ={<Error404/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRouter 
