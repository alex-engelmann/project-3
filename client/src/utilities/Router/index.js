import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import HomePage from '../../pages/home'
import About from '../../pages/about'
import Artists from '../../pages/artists'
// import * as Artist from '../../pages/artist'
// import * as Artwork from '../../pages/artwork'
// import * as Contact from '../../pages/contact'
// import * as ShoppingCart from '../../pages/shoppingCart'

function AppRouter() {
    return (
     
        <Router>
           
            <Navbar />
            
            <Switch>
            {/* <Route path="/login" exact component={LoginPage} /> */}
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/artists" component={Artists} />
                {/* <Route path="/artwork" component={ArtworkPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/artist/:id" component={ArtistPage} />
                <Route path="/shopcart" component={ShoppingCartPage} /> */}
            </Switch>
         
        </Router>
        
    );
}

export default AppRouter;