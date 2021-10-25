import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from './Footer'


const App =()=>{
    return(
<>
<Navbar/>
<Switch>
    <Route exact path='/Home' component={Home} />
    <Route exact path='/About' component={About} />
    <Route exact path='/Contact' component={Contact} />
    <Route exact path='/Service' component={Service} />
     <Redirect to='/Home'/>
</Switch>
<Footer/>
</>
    );
};
export default App;