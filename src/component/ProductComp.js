import React from 'react';

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

export default Product;