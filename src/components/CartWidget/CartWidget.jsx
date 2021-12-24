import React, {useContext, useState} from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContext/CartContext';


const CartWidget = ({})=>{
    const { carrito } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const displayCartWidget = ()=>{
        setIsCartOpen(!isCartOpen)
    }
    
    return(
            <div>
                <i onClick={displayCartWidget} className="fas fa-shopping-cart cart" ></i>
                <section className='cartContainer' id='cartContainer'>
                    <div className={`cartContainer__overlay ${isCartOpen ? "displayCartContainer" : ""}`}></div>
                    <div className={`cartContainer__content ${isCartOpen ? "displayCartContainer" : ""}`}>
                            {carrito.length !== 0 && <h2 className='cartContainer--title'>Añadido a su Carrito</h2>}
                            <ul className='cartContainer__list'>
                            {
                                carrito.length === 0 ? 
                                <li className='cartContainer__vacio'>
                                    <h4 className="cartContainer--title">Carrito vacío</h4>
                                    <Link to="/">
                                        <button className="cartContainer__vacio--button">
                                            Seguir comprando
                                        </button>
                                    </Link>
                                </li>
                                :
                                    carrito.map((prod,index)=>{
                                        return(
                                            <li className='list__item' key={index}>
                                                <img className='list__item--img' src={require(`../../assets/cards/${prod.img}`)} alt={prod.name} />
                                                <div className="list__item--detalle">
                                                    <h4>{prod.name}</h4>
                                                    <p className='list__item--valores'>
                                                        <span>{prod.quantity}</span>&times;<span> ${prod.price}</span>
                                                    </p>
                                                </div>
                                                <div className="list__item--delete"><span>&times;</span></div>
                                            </li>
                                        )
                                    })
                            }
                            </ul>
                            {
                                carrito.length !== 0 && 
                                <>
                                    <div className="finalizarCompra">
                                        <p className='finalizarCompra--total'>Total:</p>
                                        <span className='finalizarCompra--number'>$2000</span>
                                    </div>
                                    <Link to="cart">
                                        <button className='finalizarCompra--btn'>
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