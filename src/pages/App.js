import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
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
        <BrowserRouter>
          <Route path='/' component={Home}/>
          <Route path='/mine' component={Mine}/>
        </BrowserRouter>
        <TabBar/>
      </div>
    )
  }
}
export default App;
