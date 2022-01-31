import React, {useContext} from 'react'
import './CartWidget.css'

// React router Dom
import { Link } from 'react-router-dom';

// Components
import CartIcon from '../svg/CartIcon'

// Context
import { CartContext } from '../../context/CartContext/CartContext';

// Transition Group
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const CartWidget = ({ setMenuIsOpen, value })=>{
    const { carrito, deleteItem, totalPrice, cartLength } = useContext(CartContext);
    const displayCartWidget = ()=>{
        setMenuIsOpen(({1:modal2})=> [false, !modal2])
    }

    const handleCloseCartWidget = ()=>{
        setMenuIsOpen([false,false])
    }

    
    return(
            <div>
                <div className="cartContainer--icon"onClick={displayCartWidget}>
                    <CartIcon width={40} fillOpacity={0} stroke={"var(--text-color)"} className="cart"/>
                    <p>{cartLength}</p>
                </div>
                <section className='cartContainer' id='cartContainer'>
                    <div className={`cartContainer__overlay ${value[1] ? "displayCartContainer" : ""}`}></div>
                    <div className={`cartContainer__content ${value[1] ? "displayCartContainer" : ""}`}>
                            {carrito.length !== 0 && <h2 className='cartContainer--title'>Añadido a su Carrito</h2>}
                            <ul className='cartContainer__list'>
                            {
                                carrito.length === 0 ? 
                                <li className='cartContainer__vacio'>
                                    <h4 className="cartContainer--title">Carrito vacío</h4>
                                    <Link to="/">
                                        <button className="cartContainer__vacio--button" onClick={handleCloseCartWidget}>
                                            Seguir comprando
                                        </button>
                                    </Link>
                                </li>
                                :
                                <TransitionGroup>
                                    {
                                        carrito.map((prod)=>{
                                            return(
                                                <CSSTransition key={prod.id} timeout={500} classNames="itemGroupCartWidget">
                                                    <li className='list__item itemGroup' >
                                                        <img className='list__item--img' src={require(`../../assets/cards/${prod.img}`)} alt={prod.name} />
                                                        <div className="list__item--detalle">
                                                            <h4>{prod.name}</h4>
                                                            <p className='list__item--valores'>
                                                                <span>{prod.quantity}</span>&times;<span>{`${prod.price}`}</span>
                                                            </p>
                                                        </div>
                                                        <div className="list__item--delete"><span onClick={()=>deleteItem(prod)}>&times;</span></div>
                                                    </li>
                                                </CSSTransition>
                                            )
                                        })
                                    }
                                </TransitionGroup>
                            }
                            </ul>
                            {
                                carrito.length !== 0 && 
                                <>
                                    <div className="finalizarCompra">
                                        <p className='finalizarCompra--total'>Subtotal:</p>
                                        <span className='finalizarCompra--number'>{`$${totalPrice}`}</span>
                                    </div>
                                    <Link to="/cart">
                                        <button className='finalizarCompra--btn' onClick={()=>handleCloseCartWidget()}>
                                            Realizar compra
                                        </button>
                                    </Link>
                                </>
                            }
                    </div>
                </section>
            </div>
    )
}

export default CartWidget;