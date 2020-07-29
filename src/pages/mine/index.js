import React from "react"

class Mine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            b : 'I am B'
        }
    }

    render(){
        return <h1>{this.state.b}</h1>
    }
}

export default Mine