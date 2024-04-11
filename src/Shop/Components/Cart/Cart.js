import { getCartItems } from '../../redux/cartSlice';
import CartItem from './CartItem';
import cartIcon from './cartIcon.png';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../redux/cartSlice';

const Cart = () => {
const cartItems = useSelector(getCartItems)
const totalPrice = useSelector(getTotalPrice);


    return ( <div>
    <div className="center">
    <img className="cartIcon" src={cartIcon} alt="cartIcon" /> 
</div>

<div className="center">
<h3>TOTAL: {totalPrice} AUD </h3>
            </div>

    {cartItems.map(cartItem => <CartItem cartItem = {cartItem} key={cartItem.id} />)}    
</div>

    )
}

export default Cart;