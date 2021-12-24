import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx'
import AboutUs from '../../pages/AboutUs/AboutUs.jsx';
import Error404 from '../../pages/Error404/Error404.jsx';
import Cart from '../../pages/Cart/Cart';
import Contact from '../../pages/Contact/Contact.jsx';

// Context
import { CartProvider } from '../../context/CartContext/CartContext';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                    <Routes>
                        <Route path='/products/:idCategory' element ={<ItemListContainer/>}/>
                        <Route path='/detail/:id' element ={<ItemDetailContainer/>}/>
                        <Route path='/cart' element ={<Cart/>}/>
                        <Route path='/about-us' element ={<AboutUs/>}/>
                        <Route path='/contact-us' element ={<Contact/>}/>
                        <Route path='/' element ={<ItemListContainer/>}/>
                        <Route path='*' element ={<Error404/>}/>
                    </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default AppRouter 
