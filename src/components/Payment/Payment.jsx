// Components
import React, {useContext, useState, useEffect} from 'react';
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
    // el hook que uso para los errores lo hice un objeto para poder practicar un poco
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
    const inputNameError = [""]
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
        // pushOrder(order);
        // eliminarTodo();
    }

    const pushOrder = async (orderSent) =>{
        const orderFirebase = collection(db, 'orders');
        const order = await addDoc(orderFirebase, orderSent);
        setOrderId(order.id)
        console.log(orderId)
    };

    //  Acá empieza la primera vez que intenté. El handleNameValidation me funcionaba estando solo, una vez que agregué handleCellphoneValidation
    // empezó el problema


    // en primera instancia tenía todo dentro de 1 función pero estuve desmenuzando el problema para ver como solucionarlo (SPOILER ALERT!!: no lo soluciono)
    const handleValidation = ()=>{
        const { userNameError, userCellphoneError, userEmailError } = error
        userName.length === 0 ? setError({...error, userNameError:true}) : setError({...error, userNameError:false})
        (userCellphone.length <= 7 || userCellphone.length > 11) ? setError({...error, userCellphoneError: true}) : setError({...error, userCellphoneError: false})
        // console.log("el valor de usernameerrores: ",userNameError)
        // console.log("el valor de usercellphoneerror: ",userCellphoneError)
        console.log(error)
    }

    // Acá termina el primer intento



    // Y esto es harcodear todo para ver si yo estaba haciendo algo mal. De momento todo funciona, solo tengo que buscar algun regex para el email

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

    // fin del hardcodeo


    
    return(
        <>
        <BackToMenu place={'/cart'}/>
        <div className='Payment'>
            <div className='formContainer'>
                <h2>Información de contacto</h2>
                <form action="" className='payment-form'>
                    <label htmlFor="userName">Nombre y Apellido:</label>
                    <input type="text" name="userName" required onChange={getData}/>
                    {error.userNameError ? <span>Complete el campo correctamente</span> : null}
                    <label htmlFor="userCellphone">Teléfono:</label>
                    <input type="number" name="userCellphone" required onChange={getData}/>
                    {error.userCellphoneError ? <span>Complete el campo correctamente</span> : null}
                    <label htmlFor="userEmail">Correo electrónico:</label>
                    <input type="email" name="userEmail" required onChange={getData}/>
                    {tres === true && <span>Complete el campo correctamente</span>}
                    <input type="submit" value="Confirmar pedido" onClick={(e)=>{sendOrder(e);handleValidation()}}/>
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