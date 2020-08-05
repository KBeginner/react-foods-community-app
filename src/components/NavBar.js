import React from 'react'
import './NavBar.css'
import BackIcon from '../fonts/back.svg'
import MoreIcon from '../fonts/more.svg'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component{
    static defaultProps = {
        title: '今天吃什么',
        back: false,
        more: false
    }

    backHandle(){
        this.props.history.goBack()
    }

    render(){
        return <div className="Navbar">
                    <span className="head-title">{this.props.title}</span>
                    {this.props.back ? <img src={BackIcon} alt="back" onClick={this.backHandle.bind(this)}/> : ''}
                    {this.props.more ? <img src={MoreIcon} alt="more"/> : ''}
                </div>
    }
}

export default withRouter(NavBar)