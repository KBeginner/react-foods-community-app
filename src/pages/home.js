import React from "react"
import "./home.css"
import { Button } from 'antd-mobile';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(h) {
        return (
            <div className="home">
                <Button type="info" inline>请假申请</Button>
            </div>
        )
    }
}

export default Home