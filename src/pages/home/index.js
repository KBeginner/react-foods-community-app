import React from "react"
import "./index.css"

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(h) {
        return (
            <div className="home">
                <header className="header-wrap">
                    <div className="click-btn">点我告诉你</div>
                </header>
                
            </div>
        )
    }
}

export default Home