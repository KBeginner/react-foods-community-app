import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import TabBar from './components/TabBar'
import Home from './pages/home'
import Mine from './pages/mine'

import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component{
  backHandle(){
    console.log('parent')
  }
  render(){
    return  <Router>
                <NavBar back backHandle={this.backHandle}/>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/mine' component={Mine}/>
                </Switch>
                <TabBar/>
            </Router>
  }
}
export default App;
