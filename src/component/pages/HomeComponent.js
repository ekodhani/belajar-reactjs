import React from 'react';
import LatestProduct from '../LatestProductComp';
import JumbotronComponent from '../JumbotronComponent';

class Home extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Home;