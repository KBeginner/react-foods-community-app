import React from 'react'
import './index.css'
import NavBar from '../../components/NavBar'

class Ranking extends React.Component{
    render(){
        return (
            <div className="app-page">
                <NavBar back/>
                <h2 style={{textAlign:'center'}}>敬请期待</h2>
            </div>
        )
    }
}

export default Ranking