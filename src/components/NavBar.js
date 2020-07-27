import React from 'react'
import './NavBar.css'
import BackIcon from '../fonts/back.svg'
import MoreIcon from '../fonts/more.svg'

class NavBar extends React.Component{
    static defaultProps = {
        title: '请假系统'
    }

    backHandle(){
        console.log('child')
        this.props.backHandle()
    }

    render(){
        return <div className="Navbar">
            <span className="title">{this.props.title}</span>
            {this.props.back ? <img src={BackIcon} alt="back" onClick={this.backHandle}/> : ''}
            {this.props.more ? <img src={MoreIcon} alt="more"/> : ''}
        </div>
    }
}

export default NavBar