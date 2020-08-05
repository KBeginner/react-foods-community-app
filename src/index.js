import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './pages/App';
import Add from './pages/addNote/index';
import Detail from './pages/noteDetail/index'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/noteDetail/:id' component={Detail}/>
      <Route path='/addNote' component={Add}/>
      <Route path='/' component={App}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
