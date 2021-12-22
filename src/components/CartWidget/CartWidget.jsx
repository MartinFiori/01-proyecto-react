import './CartWidget.css'
import { Link } from 'react-router-dom';



const CartWidget = ()=>{
    return(
        <Link to="/cart">
        <i className="fas fa-shopping-cart cart"></i>
        </Link>
    )
}

export default CartWidget;