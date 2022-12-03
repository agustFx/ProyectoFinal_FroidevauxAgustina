import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import './cartWidge.css'


const CartWidge = () => {

    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
        <div className='cart'>
        <Link className="nav-link" to={'/cart'}>
        <button className='btn btn-secondary cart-icon'>{getItemQuantity()} | 🛒</button>
        </Link>
        </div>
        </>
    );
}

export default CartWidge;
