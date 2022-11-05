import React, { useContext, useEffect } from "react";
import "./Cart.css";

// Components
import CartIcon from "../svg/CartIcon";
import BackToMenu from "../BackToMenu/BackToMenu";
import EmptyCart from "../EmptyCart/EmptyCart.jsx";

// Context
import { CartContext } from "../../context/CartContext/CartContext";

// React Router dom
import { Link } from "react-router-dom";

// Transition Group
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Cart = () => {
	const { carrito, deleteItem, handleDecrement, handleIncrement, total } =
		useContext(CartContext);

	useEffect(() => {
		console.log("productos dentro del cart: ", carrito);
	}, []);

	return (
		<>
			<BackToMenu place={"/"} />
			<div className="emptyCartContainer">
				<h2>Su Carrito</h2>
				<ul className="emptyCartList">
					{carrito.length > 0 ? (
						<TransitionGroup>
							{carrito.map((prod, index) => {
								const { id, name, img, quantity, price, stock } = prod;
								return (
									<CSSTransition
										key={id}
										timeout={500}
										classNames="itemGroupCart"
									>
										<li key={index} className="itemList">
											<div className="itemList__details--info">
												<Link to={`/detail/${id}`}>
													<img
														src={require(`../../../public/assets/cards/${img}`)}
														alt={`${name}`}
														className="fotito"
													/>
												</Link>
												<div>
													<h3>{name}</h3>
													<p>{`$${quantity * price}`}</p>
												</div>
											</div>
											<div className="itemList__details--quantity">
												<button
													onClick={() => handleDecrement(id)}
													className={`${quantity == 1 && "disabled"}`}
												>
													<i className="fas fa-minus"></i>
												</button>
												<span>{quantity}</span>
												<button
													onClick={() => handleIncrement(id)}
													className={`${quantity == stock && "disabled"}`}
												>
													<i className="fas fa-plus"></i>
												</button>
											</div>
											<div className="itemList__details--delete">
												<span onClick={() => deleteItem(prod)}>&times;</span>
											</div>
										</li>
									</CSSTransition>
								);
							})}
						</TransitionGroup>
					) : (
						<EmptyCart />
					)}
					{carrito.length !== 0 && (
						<div className="procesoPagoContainer">
							<p>
								Subtotal:
								<span className="procesoPagoContainer--total">
									{" "}
									{total}&nbsp;$
								</span>
							</p>
							<Link to="/payment-process">
								<button className="procesoPago">
									<CartIcon
										width={20}
										height={20}
										fill={"var(--primary-color)"}
										stroke={"#fff"}
									/>
									<span>Proceso de Pago</span>
								</button>
							</Link>
						</div>
					)}
				</ul>
			</div>
		</>
	);
};

export default Cart;
