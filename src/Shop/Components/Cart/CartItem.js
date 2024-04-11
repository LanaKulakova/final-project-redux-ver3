import dataItems from "../../data/dataItems";
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {
const items = dataItems.find(
    item => item.id === cartItem.itemId)

const dispatch = useDispatch();

    return ( <div>

<div className="center">
<p> {items.name}</p>
</div>

<div className="center">
<p> {cartItem.quantity} </p>
</div>

<div className="center">
<p>Price: {items.price * cartItem.quantity} AUD </p>
</div>

<div className="center">
<span onClick = { () => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
<img className="deleteIcon" alt="icon-cart" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" />
</span>
</div>



</div>
    )
}

export default CartItem;