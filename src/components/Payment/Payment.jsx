// Components
import React, { useContext, useState } from "react";
import "./Payment.css";
import { CartContext } from "../../context/CartContext/CartContext.jsx";
import BackToMenu from "../BackToMenu/BackToMenu";
import CartIcon from '../svg/CartIcon'

// Firebase
import db from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";

// react hook form
import { useForm } from "react-hook-form";



const Payment = () => {
  const { carrito, total, eliminarTodo } = useContext(CartContext);
  const [displayer, setDisplayer] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  let date = new Date();
  let dateArgentina = date.toLocaleDateString("es-ES");
  let horaArgentina = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const [orderId, setOrderId] = useState(null);

  const sendOrder = (dataFromForm) => {
    let order = {};
    order.id = orderId
    order.buyer = dataFromForm;
    order.cart = carrito;
    order.total = (90 * total) / 100;
    order.date = `el día ${dateArgentina} a las ${horaArgentina}`;
    console.log("pedido final final: ", order);
    pushOrder(order);
    eliminarTodo();
  };

  const pushOrder = async (orderSent) => {
    const orderFirebase = collection(db, "orders");
    const order = await addDoc(orderFirebase, orderSent);
    setOrderId(order.id);
    console.log(order.id);
  };

  return (
    <>
      <BackToMenu place={"/cart"} />
      <div className="Payment">
        <div className="formContainer">
          <h2>Información de contacto</h2>
          <form action="" className="payment-form" onSubmit={handleSubmit(dataFromForm=>sendOrder(dataFromForm))}>
            <label htmlFor="userName">Nombre completo:</label>
            <p className="errorMessage">{errors.userName?.message}</p>
            <input type="text" {...register('userName',{required:'Por favor, ingrese su nombre', pattern:{value:/^[a-zA-Z-]+\s[a-zA-Z-]+$/i, message: "Por favor, ingrese su nombre completo"}})}/>
            <label htmlFor="userNumber">Teléfono <span>(sin espacios ni guiones):</span></label>
            <p className="errorMessage">{errors.userNumber?.message}</p>
            <input type="number" {...register('userNumber',{required:'Por favor, ingrese un número', pattern:{value:/[1-9]{8,10}/,message:"Por favor, ingrese un número válido"}})}/>
            <label htmlFor="userEmail">Email:</label>
            <p className="errorMessage">{errors.userEmail?.message}</p>
            <input type="email" {...register('userEmail',{required:'Por favor, ingrese un correo electrónico', pattern:{value: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,4}$/i, message:"Por favor, ingrese un correo electrónico válido"}})}/>
            <input type="submit" value="Confirmar pedido" /> 
          </form>
        </div>
        <div className="listItems-container">
          <div className={`listItems-displayer ${displayer ? "active" : ""}`} >
            <h2 onClick={()=>setDisplayer(!displayer)}>
              <CartIcon width={20} fillOpacity={0} stroke={"var(--text-color)"} className="cart"/>
              Mostrar resumen del pedido
            </h2>
            <ul className="listItems">
              {carrito.map((prod) => {
                return (
                  <li className="listItems__item" key={prod.id}>
                    <div className="listItems__item--imgInfo">
                      <img src={require(`../../../public/assets/cards/${prod.img}`)} alt={`${prod.name}`} />
                      <span>{prod.quantity}</span>
                    </div>
                    <h3>{prod.name}</h3>
                    <p>{prod.price}&nbsp;$</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="listItems-container__subtotal footer-text">
            <p>Subtotal:</p>
            <span>ARS&nbsp;{total}&nbsp;$</span>
          </div>
          <div className="listItems-container__total footer-text">
            <div className="listItems-container__total--info footer-text">
              <p>Total:</p>
              <span>(Incluye el 10% OFF por pago en efectivo)</span>
            </div>
            <span>ARS&nbsp;{(90 * total) / 100}&nbsp;$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
