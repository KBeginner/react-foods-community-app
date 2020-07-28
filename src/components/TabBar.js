import React from 'react'
import './TabBar.css'
import {Link} from 'react-router-dom'
import HomeIcon from '../fonts/home.svg'
import RankingIcon from '../fonts/ranking.svg'
import MineIcon from '../fonts/mine.svg'
import HomeSelecctedIcon from '../fonts/homeSelected.svg'
import MineSelectedIcon from '../fonts/mineSelected.svg'
import RankingSelectedIcon from '../fonts/rankingSelected.svg'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 1,
            tarList:[
                {
                    id: 1,
                    link: '/',
                    title: '吃啥',
                    icon: HomeIcon,
                    selectedIcon: HomeSelecctedIcon
                },
                {
                    id: 2,
                    link: '/ranking',
                    title: '食榜',
                    icon: RankingIcon,
                    selectedIcon: RankingSelectedIcon
                },
                {
                    id: 3,
                    link: '/mine',
                    title: '我的',
                    icon: MineIcon,
                    selectedIcon: MineSelectedIcon
                }
            ]
        }
    }

    change(val){
        this.setState({
            selectedIndex: val
        })
    }
    

    render(){
        let list = this.state.tarList.map(el=>{
            return  <li className={this.state.selectedIndex===el.id?'active':''} key={el.id}>
                        <Link to={el.link} onClick={(e)=>this.change(el.id)}>
                            <img src={this.state.selectedIndex===el.id?el.selectedIcon:el.icon} alt={el.title} onClick={(e)=>this.change(el.id)}/>
                            <span>{el.title}</span>    
                        </Link>
                    </li>
        })
    return <ul className="tabber">{list}</ul>
    }
}

export default Nav