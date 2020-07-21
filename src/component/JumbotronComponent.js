import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class JumbotronComponent extends React.Component {
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
            <div className="slider">
                <ul className="slides">
                    <CarouselItems
                        image="https://images.pexels.com/photos/1832324/pexels-photo-1832324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        title="Need Veil ?" />
                    <CarouselItems
                        image="https://images.pexels.com/photos/1028847/pexels-photo-1028847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <CarouselItems
                        image="https://images.pexels.com/photos/1028849/pexels-photo-1028849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <CarouselItems
                        image="https://images.pexels.com/photos/3819769/pexels-photo-3819769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </ul>
            </div>
        );
    }
}

function CarouselItems(props) {
    return (
        <li>
            <img src={props.image}></img>
            <div className="caption left-align" style={{ marginTop: '80px' }}>
                <h1>{props.title}</h1>
                {/* <a href="#" className="btn valign-wrapper" style={{ marginRight: '20px' }}><i className="material-icons right">shopping_cart</i>Shop Now!</a> */}
                {/* <a href="#" className="btn valign-wrapper"><i class="material-icons right">store</i>See Catalog</a> */}
            </div>
        </li>
    );
}

export default JumbotronComponent;