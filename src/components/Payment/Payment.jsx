// Components
import React, { useContext, useState, useEffect } from "react";
import "./Payment.css";
import { CartContext } from "../../context/CartContext/CartContext.jsx";
import BackToMenu from "../BackToMenu/BackToMenu";

// Firebase
import db from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";

// react hook form
import { useForm } from "react-hook-form";



const Payment = () => {
  const { carrito, total, eliminarTodo } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {setUserInfo(data);console.log(data)};
  let date = new Date();
  let dateArgentina = date.toLocaleDateString("es-ES");
  let horaArgentina = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const [userInfo, setUserInfo] = useState();
  const [orderId, setOrderId] = useState(null);

  const getData = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const sendOrder = () => {
    let order = {};
    order.buyer = userInfo;
    order.cart = carrito;
    order.total = (90 * total) / 100;
    order.date = `el día ${dateArgentina} a las ${horaArgentina}`;
      console.log("pedido final final: ", order);
    // pushOrder(order);
    // eliminarTodo();
  };

  const pushOrder = async (orderSent) => {
    const orderFirebase = collection(db, "orders");
    const order = await addDoc(orderFirebase, orderSent);
    setOrderId(order.id);
    console.log(orderId);
  };

  return (
    <>
      <BackToMenu place={"/cart"} />
      <div className="Payment">
        <div className="formContainer">
          <h2>Información de contacto</h2>
          <form action="" className="payment-form" onSubmit={handleSubmit(data=>setUserInfo(data))}>
            {/* <label htmlFor="userName">Nombre y Apellido:</label>
            <input type="text" {...register("userName", {required:true})} onChange={getData}/>
            <p>{errors.userName && "Esto esta mal"}</p>
            <label htmlFor="userCellphone">Teléfono:</label>
            <input type="number" {...register("userCellphone", {required:true})} onChange={getData}/>
            <label htmlFor="userEmail">Correo electrónico:</label>
            <input type="email" {...register("userEmail", {required:true})} onChange={getData}/>*/}
            {/* <label htmlFor="nombreUsuario">Nombre usuario:</label>
            <input type="text" {...register("nombreUsuario", {required:'prueba'})} className={errors.nombreUsuario && "nofunca"}/>
            <p>{errors.nombreUsuario?.message}</p> */}
            <label htmlFor="userName">Nombre</label>
            <p>{errors.userName?.message}</p>
            <input type="text" {...register('userName',{required:'Por favor, ingrese un nombre/apellido válido'})}/>
            <label htmlFor="userNumber">Teléfono</label>
            <p>{errors.userNumber?.message}</p>
            <input type="number" {...register('userNumber',{required:'Por favor, ingrese un número válido'})}/>
            <label htmlFor="userEmail">Email</label>
            <p>{errors.userEmail?.message}</p>
            <input type="email" {...register('userEmail',{required:'Por favor, ingrese un correo electrónico válido'})}/>
            <input type="submit" value="Confirmar pedido" onClick={(e) => sendOrder(e)}/> 
          </form>
        </div>
        <div className="listItems-container">
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
