import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import TabBar from '../components/TabBar'
import Home from './home/index'
import Mine from './mine/index'

import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component{
  render(){
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route path='/mine' component={Mine}/>
        <TabBar/>
      </div>
    )
  }
}
export default App;
