import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="page-footer brown lighten-1">
                <div className="container" style={{ marginTop: '50px', marginBottom: '40px' }}>
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">BYANAID</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Menu</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Cataloug</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center-align">
                        © 2020 Copyright BYANAID
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;