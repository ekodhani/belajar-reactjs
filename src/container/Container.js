import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import JumbotronComponent from '../component/JumbotronComponent';
import FooterComponent from '../component/FooterComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Catalog from '../component/pages/CatalogComponent';
import About from '../component/pages/AboutComponent';
import Home from '../component/pages/HomeComponent';


class Container extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavbarComponent />

                    <Route path="/" exact component={Home} />
                    <Route path="/catalog" exact component={Catalog} />
                    <Route path="/about" exact component={About} />

                    <FooterComponent />
                </div >
            </Router>
        );
    }
}

export default Container;