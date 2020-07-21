import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class SideNavComponent extends React.Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        return (
            <div>
                <nav>
                    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                    <div className="container">
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="">Beranda</a></li>
                            <li><a href="">Profile</a></li>
                        </ul>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="https://materializecss.com/images/office.jpg"></img>
                        </div>
                        <a href="#user"><img className="circle" src="https://ekodhani.github.io/images/user/dhaniaqua.jpg"></img></a>
                        <a href="#name"><span className="white-text name">Dhaniflw</span></a>
                        <a href="#email"><span className="white-text email">ekonurramadhani@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i class="material-icons">dashboard</i>Beranda</a></li>
                    <li><a href="#!"><i class="material-icons">account_box</i>Profile</a></li>
                    <li><div className="divider"></div></li>
                    {/* <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!"></a></li> */}
                </ul>

            </div>
        );
    }
}

export default SideNavComponent;