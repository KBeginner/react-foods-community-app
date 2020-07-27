import React from 'react'
import './TabBar.css'
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 1
        }
    }

    change(val){
        this.setState({
            selectedIndex: val
        })
    }
    

    render(){
        return <ul className="tabber">
                    <li className={this.state.selectedIndex===1?'active':''}><Link to="/" onClick={(e)=>this.change(1)}>首页</Link></li>
                    <li className={this.state.selectedIndex===2?'active':''}><Link to="/mine" onClick={(e)=>this.change(2)}>我的</Link></li>
                </ul>
    }
}

export default Nav