import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
// import * as Home from '../../pages/home'
// import * as About from '../../pages/about'
// import * as Artists from '../../pages/artists'
// import * as Artwork from '../../pages/artwork'
// import * as Contact from '../../pages/contact'
// import * as ShoppingCart from '../../pages/shoppingCart'

// function LoginPage() {
//     return { Navbar };
// }

// function HomePage() {
//     return { Home };
// }

// function AboutPage() {
//     return { About };
// }

// function ArtistsPage() {
//     return { Artists };
// }

// function ArtworkPage() {
//     return { Artwork };
// }

// function ContactPage() {
//     return { Contact };
// }

// function ShoppingCartPage() {
//     return { ShoppingCart };
// }



function AppRouter() {
    return (
        <Router>
            <Navbar />

            <Switch>
            {/* <Route path="/login" exact component={LoginPage} /> */}
                {/* <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/artists" component={ArtistsPage} />
                <Route path="/artwork" component={ArtworkPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/shopcart" component={ShoppingCartPage} /> */}
            </Switch>
        </Router>
    );
}

export default AppRouter;