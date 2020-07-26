import React from 'react';

const About = () => (
    <div className="container">
        <div className="row">
            <div className="col s6">
                <h1>Byanaid From You</h1>
                <h5 style={{ fontWeight: 'bold' }}>100% Halal</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4419678627733!2d106.68776251431008!3d-6.205284762512323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9976298b639%3A0x8a1792427f3d46fa!2sGg.%20Kramat%2C%20RT.007%2FRW.002%2C%20Nerogtog%2C%20Kec.%20Pinang%2C%20Kota%20Tangerang%2C%20Banten!5e0!3m2!1sen!2sid!4v1595783860917!5m2!1sen!2sid" width="400" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="col s6" style={{ marginTop: '20px' }}>
                <img className="responsive-img" src="https://images.pexels.com/photos/1832327/pexels-photo-1832327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
            </div>
        </div>
    </div>
)

export default About;