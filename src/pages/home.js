import React from "react"
import { Button } from 'antd-mobile';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a: 'I am A '
        }
    }
    render(h) {
        return (
            <div>
                <Button type="ghost">Start</Button>
                <h1>{this.state.a}</h1> 
            </div>
        )
    }
}

export default Home