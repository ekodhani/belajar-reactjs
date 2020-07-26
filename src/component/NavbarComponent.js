import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

class NavbarComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            menus: [
                { label: 'Home', path: "/" },
                { label: 'Catalog', path: "/catalog" },
                { label: 'About', path: "/about" }
            ]
        }
    }
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
                            {this.state.menus.map((menu) => (
                                <li key={menu.label}>
                                    <Link to={menu.path}>{menu.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="slide-out">
                    {this.state.menus.map((menu) => (
                        <li key={menu.label}>
                            <Link to={menu.path}>{menu.label}</Link>
                        </li>
                    ))}
                </ul>
            </div >
        );
    }
}

export default NavbarComponent;