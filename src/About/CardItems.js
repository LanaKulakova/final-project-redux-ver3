import { useState } from "react";

export const CardItems = ({id, description, image}) => {

    const [showText, setShowText] = useState(false);

return ( 
<div key={id}>
<div className="containerAbout">
<img src={image} width="700px" alt="pics" />
</div>

<div className="containerAbout">
    <p> #{id} - { showText ? description : description.substring(0, 80) + "...."}  <button className="showMore" onClick = { () => setShowText(!showText)} > {showText ? "Show less" : "Show More"} </button>   </p>
</div>
</div>
)

}

export default CardItems;

