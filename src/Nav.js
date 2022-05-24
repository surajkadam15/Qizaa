import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ReactDOM from "react-dom";
import './Nav.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    
        return (
<>



<nav className="navbar navbar-expand-lg fixed-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src="./image/logo.png" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-stream navbar-toggler-icon"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink activeClassName="current" className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="current" className="nav-link " to="/Ourstore">Our Store</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="current"  className="nav-link" to="/Tableware">Tableware</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="current" className="nav-link" to="/Sustainable">Sustainable Packaging</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="current" className="nav-link" to="/Lifestyle">Lifestyle Products</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="current" className="nav-link" to="/Organic">Organic Products</NavLink>
        </li>


        <li className="nav-item shop-cart">
        <i className="fas fa-shopping-cart"></i>
        </li>

        <li className="nav-item shop-proflie">
        <i className="fas fa-user-circle"></i> 
        </li>

        <li className="nav-item shop-join">
          <NavLink className="nav-link" to="#">Join Community</NavLink>
        </li>
       </ul> 
    </div>
  </div>
</nav>









</>


 )

}

export default Navbar;