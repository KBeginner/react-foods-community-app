import React from 'react'
import './Nav.css'
import { TabBar } from 'antd-mobile';
import homeIcon from '../fonts/home.svg'
import mineIcon from '../fonts/mine.svg'
import homeSelected from '../fonts/homeSelected.svg'
import mineSelected from '../fonts/mineSelected.svg'


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: ''
        }
        this.homeIcon = this.homeIcon.bind(this)
        this.homeSelectIcon = this.homeSelectIcon.bind(this)
        this.mineIcon = this.mineIcon.bind(this)
        this.mineSelectIcon = this.mineSelectIcon.bind(this)
        // this.pressHandle = this.pressHandle.bind(this)
    }

    // 首页图标
    homeIcon(){
        return <img src={homeIcon} alt="homeIcon" className="tabber-icon"/>
    }

    // 首页选中图标
    homeSelectIcon(){
        return <img src={homeSelected} alt="homeSelectIcon" className="tabber-icon"/>
    }

    // 我的图标
    mineIcon(){
        return <img src={mineIcon} alt="mineIcon" className="tabber-icon"/>
    }

    // 我的选中图标
    mineSelectIcon(){
        return <img src={mineSelected} alt="mineSelectIcon" className="tabber-icon"/>
    }

    pressHandle(value){
        if (value===1) {
            this.setState({
                selectedIndex: 'home'
            })
        } 
        else if (value===2) {
            this.setState({
                selectedIndex: 'mine'
            })
        }
    }
    

    render(){
        if (this.state.selectedIndex==='home') {
            
        } 
        else if (this.state.selectedIndex==='mine') {
            
        }
        return (
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
                <TabBar.Item title="首页" key="home" 
                    icon={ this.homeIcon()} 
                    selectedIcon={this.homeSelectIcon()}
                    onPress={this.pressHandle.bind(this,1)}
                    selected={this.state.selectedIndex==='home'?true:false}
                />
                <TabBar.Item title="我的" key="mine" 
                    icon={ this.mineIcon()} 
                    selectedIcon={this.mineSelectIcon()}
                    onPress={this.pressHandle.bind(this,2)}
                    selected={this.state.selectedIndex==='mine'?true:false}
                />
            </TabBar>
        )
    }
}

export default Nav