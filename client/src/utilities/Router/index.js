import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import HomePage from '../../pages/home'
import About from '../../pages/about'
import Artists from '../../pages/artists'
import Artist from '../../pages/artist'
import Artwork from '../../pages/artwork'
import Contact from '../../pages/contact'
import ShoppingCart from '../../pages/shoppingCart'
import Login from '../../pages/login'

function AppRouter() {
    return (
     
        <Router>
           
            <Navbar />
            
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/artists" component={Artists} />
                <Route path="/artwork" component={Artwork} />
                 <Route path="/contact" component={Contact} />
                <Route path="/artist/:id" component={Artist} />
                <Route path="/shopcart" component={ShoppingCart} />
                <Route path="/login" component={Login} />
            </Switch>
         
        </Router>
        
    );
}

export default AppRouter;