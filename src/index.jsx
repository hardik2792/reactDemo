import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import routing components
import {Switch} from 'react-router';
// import {HashRouter, Route, IndexRoute, browserHistory} from 'react-router-dom';
import { BrowserRouter as Router, IndexRoute, Route, Link, browserHistory } from "react-router-dom";

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'

ReactDOM.render(
      <Router>
          <div>
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <a className="navbar-brand" href="#">Scotch Cars</a>
                      </div>
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/cars">Cars</Link></li>
                            <li><Link to="/about">About</Link></li>
                          </ul>
                      </div>
                  </div>
              </nav>

              <Route path="/home" component={Home}/>
              <Route path="/cars" component={Car}/>
              <Route path="/about" component={About}/>
          </div>

      </Router>,
    document.getElementById('container')
);

// <Router>
//       <Route path="/" component={Main} history={browserHistory}>
//           <IndexRoute component={Home} />
//           <Route path="/cars" component={Car}/>
//           <Route path="/about" component={About}/>
//       </Route>
// </Router>
