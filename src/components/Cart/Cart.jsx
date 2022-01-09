import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'
import CartIcon from '../svg/CartIcon'
import BackToMenu from '../BackToMenu/BackToMenu';

const Cart = () => {
    const { carrito, deleteItem, handleDecrement, handleIncrement, total } = useContext(CartContext);
    
    useEffect(() => {
        console.log("productos dentro del cart: ", carrito)
            // console.log(carrito.length)
    }, []);
    
    return(
        <>
            <BackToMenu/>
            <div className='emptyCartContainer'>
                <h2>
                    Su Carrito
                </h2>
                <ul className="emptyCartList">
                    {
                        carrito.length > 0 ?
                        carrito.map((prod, index)=>{
                            return(
                                <li key={index} className='itemList'>
                                    <div className='itemList__details--info'>
                                        <Link to={`/detail/${prod.id}`}>
                                            <img src={require(`../../../public/assets/cards/${prod.img}`)} alt={`${prod.name}`} className='fotito'/>
                                        </Link>
                                        <div>
                                            <h3>{prod.name}</h3>
                                            <p>{`$${prod.quantity*prod.price}`}</p>
                                        </div>
                                    </div>
                                    <div className="itemList__details--quantity">
                                        <button onClick={()=>handleDecrement(prod.id)} className={prod.quantity === 1 && 'disabled'}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <span>{prod.quantity}</span>
                                        <button onClick={()=>handleIncrement(prod.id)} className={prod.quantity === prod.stock && 'disabled'}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="itemList__details--delete">
                                        <span onClick={()=>deleteItem(prod)}>
                                            &times;
                                        </span>
                                    </div>
                                </li>
                            )
                        })
                        :
                        <div className="emptyCart">
                            <img src={require('../../assets/cart/empty-cart.png')} alt="" />
                            <h3>Su carrito está vacío</h3>
                            <Link to="/">
                                <button>
                                    Seguir comprando
                                </button>
                            </Link>
                        </div>
                    }
                {
                    carrito && 
                        <div className='procesoPagoContainer'>
                            <p>Total:<span className='procesoPagoContainer--total'> ${total}</span></p>
                            <Link to="/paymet-process">
                                <button className='procesoPago'>
                                    <CartIcon width={24} height={24} fill={"var(--primary-color)"} stroke={"#fff"}/>
                                    <span>Proceso de Pago</span>
                                </button>
                            </Link>
                        </div>
                }
                </ul>
            </div>
        </>
    )
}

export default Cart
