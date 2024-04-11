import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import About from "./About/About";
import Staff from "./Staff/Staff";
import Shop from "./Shop/Shop";
import Contact from "./Contact/Contact";


function App() {
  return (

<Router>
    <nav>
    <Link to="/final-project-redux-ver3" className="link textcolor" >Home</Link>
    <Link to="/about" className="link textcolor">About </Link>
    <Link to="/staff" className="link textcolor">Staff</Link>
    <Link to="/shop" className="link textcolor">Shop</Link>
    <Link to="/contact" className="link textcolor">Contact</Link>
  </nav>

<Routes>
  <Route path="/final-project-redux-ver3" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/staff" element={<Staff />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/contact" element={<Contact />} /> 
</Routes> 
</Router>

  )
}

export default App;
