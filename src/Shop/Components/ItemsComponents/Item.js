import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch} from "react-redux";

const Item = ({item}) => {
const [quantity, setQuantity] = useState(1);

const dispatch = useDispatch();

    return ( <div> 
        <img className="itemsphoto" alt="itemphoto" src={`${item.image}`} />
        <h2> {item.name} </h2>
        <p> AUD {item.price} </p>
        
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        
        <button onClick={ () => {dispatch(addItemToCart( {item, quantity}))
    }} > Add to Cart</button>
        </div>
        
    )
}

export default Item;