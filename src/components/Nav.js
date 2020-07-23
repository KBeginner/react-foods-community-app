import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'
import { TabBar } from 'antd-mobile';


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navList : [{
                id: '1',
                link: '/',
                title: '首页'
            },{
                id: '2',
                link: '/mine',
                title: '我的'
            }]
        }
    }
    render(){
        // 导航
        let navs = this.state.navList.map((el,index)=>{
            return <li key={index}><NavLink to={el.link}>{el.title}</NavLink></li>
        })
    return <ul>{navs}</ul>
    }
}

export default Nav