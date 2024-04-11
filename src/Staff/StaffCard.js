import { dataStaff } from "./dataStaff";
import '../App.css';
import { useState } from "react";

function StaffCard() {

const [coach, setCoach] = useState(0);
const {id, image, name, position, description} = dataStaff[coach]

const previousCoach = () => {
    setCoach((coach => {
        coach --;
        if (coach<0) {
            return dataStaff.length-1;
        }
        return coach;
    }))
    }
    
    const nextCoach = () => {
        setCoach((coach=> {
            coach++;
            if (coach>dataStaff.length-1) {
                coach=0;
            }
            return coach;
        }))
    }

    return (
<div>

    <div>
    <h2 className="section"> Introducing our coaches </h2>
</div>

<div className="containerAbout">
<img src={image} width="200px" alt="pics" />
</div>
<div className="containerAbout">
    <h3> #{id} - {name} </h3>
</div>
<div className="containerAbout">
    <h3> {position} </h3>
</div>
<div className="containerAbout">
    <p className="parDescriptionStaff"> {description} </p>
</div>
<div className="btn">
<button className="buttonstyle" onClick={previousCoach} > PREVIOUS </button>
<button className="buttonstyle" onClick={nextCoach}>NEXT</button>
</div>


</div>

)
}

export default StaffCard;