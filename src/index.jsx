import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {HashRouter, Route} from 'react-router-dom';
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'

// class Home extends Component {
//     render(){
//         return (<h1>Hi</h1>);
//     }
// }
//
// // More components
// class Car extends Component {
//     render(){
//         return (<h1>Cars page</h1>);
//     }
// }
//
// class About extends Component {
//     render(){
//         return (<h1>About page</h1>);
//     }
// }

ReactDOM.render(
    <HashRouter component={Main}>
      <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cars" component={Car}/>
          <Route exact path="/about" component={About}/>
      </div>
    </HashRouter>,
    document.getElementById('container')
);
