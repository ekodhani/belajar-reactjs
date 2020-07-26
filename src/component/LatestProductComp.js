import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Product from './ProductComp';

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

export default LatestProduct;