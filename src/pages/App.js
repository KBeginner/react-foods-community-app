import React from 'react';
import { Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import TabBar from '../components/TabBar'
import Home from './home/index'
import Mine from './mine/index'

class App extends React.Component{

  render(){
    return (
      <div className="app">
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route path='/mine' component={Mine}/>
        <TabBar/>
      </div>
    )
  }
}
export default App;
