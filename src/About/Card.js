import '../App.css';
import CardItems from './CardItems';
import { dataAbout } from './dataAbout';
import { useState } from 'react';


function Card() {
    const [pic, setPic] = useState(dataAbout);

        
    return (
        <div>
            {pic.map((item => 
            <CardItems 
            key={item.id}
            description={item.description}
            image={item.image}
            />
))}

<div className="containerAbout">
    <button className="showMore" onClick = { () => setPic([])}>Got it!</button>
</div>
</div>
    )
}

export default Card;