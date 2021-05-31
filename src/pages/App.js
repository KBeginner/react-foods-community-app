import React from 'react';
import { Route } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'
import TabBar from '../components/Tabbar/TabBar'
import Home from './home/index'
import Mine from '../pages/mine/index'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <NavBar />
        <Home/>
        <TabBar />
      </div>
    )
  }
}
export default App;
