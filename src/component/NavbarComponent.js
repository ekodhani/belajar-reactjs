import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class NavbarComponent extends React.Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        return (
            <div>
                <nav className="brown lighten-2">
                    <div className="nav-wrapper container">
                        <a href="#!" className="brand-logo">byanaid</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Cataloug</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="slide-out">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cataloug</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        );
    }
}

export default NavbarComponent;