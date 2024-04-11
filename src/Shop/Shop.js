import '../App.css';
import gsap from "gsap";
import ball from "../ball.png";
import { useRef, useEffect } from 'react';
import logonew from '../logonew.png';
import Items from './Components/ItemsComponents/Items';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function Shop() {
    let ballItem = useRef(null);
    useEffect( () => {
        gsap.to(
            ballItem,
                        {
                rotation: 360,
                y: +3,
                x: +700,
                duration: 3,
                delay: .2,
            }
        )
    }, [])


return (
<div>
<header>
<div className="bounceBall">
    <img ref = {element => {ballItem=element}} src={ball} width="30px" alt="ball"  />
    </div>

    <div className="logo">
    <img src={logonew} width="300px" alt="companylogo" />
    </div>  
    </header>

<main>
    <section>
<div className="App">
<div className="blockShop">
    <AllCategories />
    <Cart />
</div>
<div className="blockShop">
    <Items />
</div>
</div>
</section>
</main>

<footer className="down">
    
        <p>&#9883; Copyright 2023 Match Point Sydney Tennis Academy Pty Ltd. All rights reserved.</p>
        <p> Website Designed by Svetlana Kulakova</p>
    
</footer>

</div>
);
}
export default Shop;