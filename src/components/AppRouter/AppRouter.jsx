import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx'
import AboutUs from '../../pages/AboutUs/AboutUs.jsx';
import Error404Page from '../../pages/Error404Page/Error404Page.jsx';
import CartPage from '../../pages/Cart/CartPage.jsx';
import Contact from '../../pages/Contact/Contact.jsx';
import PaymentContainer from '../../pages/PaymetContainer/PaymentContainer.jsx';
import TicketPage from '../../pages/TicketPage/TicketPage';


// Context
import { CartProvider } from '../../context/CartContext/CartContext';
import { UserProvider } from '../../context/UserContext/UserContext';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <CartProvider>
            <UserProvider>
                <NavBar/>
                    <Routes>
                        <Route path='/detail/:id' element ={<ItemDetailContainer/>}/>
                        <Route path='/cart' element ={<CartPage/>}/>
                        <Route path='/about-us' element ={<AboutUs/>}/>
                        <Route path='/contact-us' element ={<Contact/>}/>
                        <Route path='/ticket-page' element ={<TicketPage/>}/>
                        <Route path='/payment-process' element={<PaymentContainer/>}/>
                        <Route path='/' element ={<ItemListContainer/>}/>
                        <Route path='*' element ={<Error404Page/>}/>
                    </Routes>
            </UserProvider>
            </CartProvider>
        </BrowserRouter>
    )
}

export default AppRouter 
