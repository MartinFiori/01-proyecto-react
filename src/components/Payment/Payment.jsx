// Components
import React, {useContext, useState} from 'react';
import './Payment.css';
import {CartContext} from '../../context/CartContext/CartContext.jsx';
import BackToMenu from '../BackToMenu/BackToMenu';

// Firebase
import db from '../../Firebase';
import { collection, addDoc } from 'firebase/firestore';


const Payment = () => {
    const { carrito, total, eliminarTodo} = useContext(CartContext);
    let date = new Date();
    let dateArgentina = date.toLocaleDateString('es-ES');
    let horaArgentina = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    const [error, setError] = useState({
        userNameError: false,
        userCellphoneError: false,
        userEmailError: false
    });
    const [userInfo, setUserInfo] = useState({
        userName: '',
        userCellphone:'',
        userEmail:'',
    });
    const { userNameError, userCellphoneError, userEmailError } = error;
    const { userName, userCellphone, userEmail } = userInfo;
    const [orderId, setOrderId] = useState(null);


    const getData =(e) =>{
        const { name, value } = e.target;
        setUserInfo({...userInfo, [name]: value})
    }

    const sendOrder = (e)=>{
        e.preventDefault();
        let order = {};
        order.buyer = userInfo;
        order.cart = carrito;
        order.total = (90*total)/100;
        order.date = `el día ${dateArgentina} a las ${horaArgentina}`;
        console.log("pedido final final: ", order);
        pushOrder(order);
        eliminarTodo();
    }

    const pushOrder = async (orderSent) =>{
        const orderFirebase = collection(db, 'orders');
        const order = await addDoc(orderFirebase, orderSent);
        setOrderId(order.id)
        console.log(orderId)
    };

    const handleNameValidation = ()=>{
        if(userName.length === 0){
            setError({...error, userNameError: true})
        } 
        if(userName.length !== 0){
            setError({...error, userNameError: false})
        }
    }

    const handleCellphoneValidation = ()=>{
        if(userCellphone.length <= 7 || userCellphone.length > 11){
            setError({...error, userCellphoneError: true})
        }
        if(userCellphone.length >= 8 || userCellphone.length <= 11){
            setError({...error, userCellphoneError: false})
        }
    }

    // const handleValidation = ()=>{
    //     handleNameValidation();
    //     handleCellphoneValidation();
    // }


    const [uno, setUno] = useState(false);
    const [dos, setDos] = useState(false);
    const [tres, setTres] = useState(false);
    

    const problemas = ()=>{
        if(userName.length === 0){
            setUno(true)
        }
        if(userName.length !== 0){
            setUno(false)
        }


        if(userCellphone.length < 8 || userCellphone.length > 11){
            setDos(true)
        } else{
            setDos(false)
        }

        userEmail.length === 0 ? setTres(true) : setTres(false)
    }

    
    return(
        <>
        <BackToMenu place={'/cart'}/>
        <div className='Payment'>
            <div className='formContainer'>
                <h2>Información de contacto</h2>
                <form action="" className='payment-form'>
                    <label htmlFor="userName">Nombre y Apellido:</label>
                    <input type="text" name="userName" required onChange={getData}/>
                    {uno === true && <span>Complete el campo correctamente</span>}
                    <label htmlFor="userCellphone">Teléfono:</label>
                    <input type="number" name="userCellphone" required onChange={getData}/>
                    {dos === true && <span>Complete el campo correctamente</span>}
                    <label htmlFor="userEmail">Correo electrónico:</label>
                    <input type="email" name="userEmail" required onChange={getData}/>
                    {tres === true && <span>Complete el campo correctamente</span>}
                    <input type="submit" value="Confirmar pedido" onClick={(e)=>{sendOrder(e);problemas()}}/>
                </form>
            </div>
            <div className='listItems-container'>
                <ul className='listItems'>
                    {
                    carrito.map(prod=>{
                        return(
                            <li className='listItems__item' key={prod.id}>
                                <div className='listItems__item--imgInfo'>
                                    <img src={require(`../../../public/assets/cards/${prod.img}`)} alt={`${prod.name}`}/>
                                    <span>{prod.quantity}</span>
                                </div>
                                <h3>{prod.name}</h3>
                                <p>{prod.price}&nbsp;$</p>
                            </li>
                        )
                    })
                    }
                </ul>
                <div className='listItems-container__subtotal footer-text'>
                    <p>Subtotal:</p>
                    <span>ARS&nbsp;{total}&nbsp;$</span>
                </div>
                <div className="listItems-container__total footer-text">
                    <div className='listItems-container__total--info footer-text'>
                        <p>Total:</p>
                        <span>(Incluye el 10% OFF por pago en efectivo)</span>
                    </div>
                    <span>ARS&nbsp;{(90*total)/100}&nbsp;$</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payment 