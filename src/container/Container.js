import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import JumbotronComponent from '../component/JumbotronComponent';
import FooterComponent from '../component/FooterComponent';
import M from 'materialize-css/dist/js/materialize.min.js';

class Container extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <JumbotronComponent />
                <div className="grey lighten-2">
                    <div className="container">
                        <div className="row">
                            <div className="col s6" style={{ marginTop: '100px', marginBottom: '100px' }}>
                                <img src="https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="responsive-img"></img>
                            </div>
                            <div className="col s6 left-align" style={{ marginTop: '62px', marginBottom: '100px' }}>
                                <h3>How It Works</h3>
                                <p>One common flaw we've seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we've created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference!</p>
                                <a className="waves-effect waves-light btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <LatestProduct />
                <FooterComponent />
            </div>
        );
    }
}

class LatestProduct extends React.Component {
    componentDidMount() {
        let slider = document.querySelector('.slider');
        M.Slider.init(slider, {
            height: 600,
            indicators: false,
            interval: 4000
        });
    }
    render() {
        return (
            <div className="row container">
                <h1 className="center-align">Cataloug</h1>
                <hr style={{ width: '50%', marginBottom: '50px' }}></hr>
                <Product
                    image="https://images.pexels.com/photos/1832326/pexels-photo-1832326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    name="Pashmina" />
                <Product
                    image="https://images.pexels.com/photos/322920/pexels-photo-322920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    name="Segi Empat" />
                <Product
                    image="https://images.pexels.com/photos/1011508/pexels-photo-1011508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    name="Rapih" />
                <Product
                    image="https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    name="Bertopi" />
            </div>
        );
    }
}

function Product(props) {
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-image">
                    <img src={props.image}></img>
                    <span className="card-title">{props.name}</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">shopping_cart</i></a>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
        </div>
    );
}

export default Container;