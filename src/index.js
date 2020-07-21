import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SideNavComponent from './component/SideNavComponent';
// import NavbarComponent from './component/NavbarComponent';
import * as serviceWorker from './serviceWorker';
import Container from './container/Container';

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
