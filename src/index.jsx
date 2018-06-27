import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import routing components
// import {HashRouter, Route} from 'react-router-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

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

// ReactDOM.render(
//     <HashRouter path="/" component={Main}  path="app">
//       <div>
//           <Route exact path="/" component={Home}/>
//           <Route exact path="/cars" component={Car}/>
//           <Route exact path="/about" component={About}/>
//       </div>
//     </HashRouter>,
//     document.getElementById('container')
// );

<Router>
    <div>
      <Route path="/" component={Main} history={browserHistory}>
          <IndexRoute component={Home} />
          <Route path="/cars" component={Car}/>
          <Route path="/about" component={About}/>
      </Route>
    </div>
</Router>
