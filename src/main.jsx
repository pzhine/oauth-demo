import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import './app.css';

import Login from './components/Login.jsx';
import Project from './components/Project.jsx';

const Main = React.createClass({
  render() {
    return (
      <div className="centered">
        <h1>GitHub OAuth Demo</h1>
        <nav>
        </nav>
        { this.props.children }
      </div>
    )
  }
});

render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Login} />
      <Route path='/project' component={Project} />
    </Route>
  </Router>, 
  document.getElementById('main')
)

