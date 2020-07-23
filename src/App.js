import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/home'
import Mine from './pages/mine'
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    // 首页路由
    <Router>
      <Switch>
        <Route exact  path='/' component={Home}/>
        <Route path='/mine' component={Mine}/>
      </Switch>
      <Nav/>
    </Router>
  );
}

export default App;
