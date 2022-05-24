import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Nav.css';
import Navbar from './Nav';
import Ourstore from './Ourstore';
import Home from "./Home";
import Tableware from "./Tableware";
import Sustainable from "./Sustainable ";
import Lifestyle from "./Lifestyle";
import Organic from "./Organic"
import { Switch, Route ,Redirect } from "react-router-dom";


const Qizaa = () => {
    return (
        <>
        
        <Navbar/>
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Ourstore" component={Ourstore} />
    <Route exact path="/Tableware" component={Tableware} />
    <Route exact path="/Sustainable" component={Sustainable} /> 
    <Route exact path="/Lifestyle" component={Lifestyle} />
    <Route exact path="/Organic" component={Organic} />  
    
    <Redirect to="/" />

</Switch>
       
        
        
        </> 
    
    );
};
export default Qizaa;