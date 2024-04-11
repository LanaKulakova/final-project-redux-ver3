import '../App.css';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

function ButtonContact() {

    return (
        <div>
<div className="calltoaction">
<Link to="/contact" element={<Contact />}> <button className="btnCall"> Contact us</button></Link>
</div>

</div>
        
    )


}

export default ButtonContact;