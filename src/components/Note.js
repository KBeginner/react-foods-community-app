import React from 'react'
import './Note.css'
import love from '../fonts/love.svg'
import loved from '../fonts/loved.svg'


class Note extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loveds: []
        }
        this.loveHandle = this.loveHandle.bind(this)
    }

    loveHandle(id,type){
        console.log(id, type)
        let arr = this.state.loveds.map(el=>el)
        if (type===1) {
            this.setState({
                loveds: arr.filter(el=>el!==id)
            })
        } else {
            this.setState({
                loveds: arr.push(id) 
            })
        }
        
    }

    render(){
        return (
            <div className="note">
                <div className="note-graph"><img src={this.props.data.photoList[0]} alt={this.props.data.title}/></div>
                <h4 className="title">{this.props.data.title}</h4>
                <div className="note-info">
                    <div className="pic">
                        <img src={this.props.data.uerPic} alt={this.props.data.userName}/>
                        <span style={{marginLeft:'0.3rem'}}>{this.props.data.userName}</span>
                    </div>  
                    <div className="love">
                        {/* <Love 
                            id={this.props.data.noteId} 
                            loveds={this.state.loveds} 
                            loveHandle={this.loveHandle.bind(this)}
                        /> */}
                        <img src={love} alt="收藏"/>
                        <span style={{margin:'0 0.2rem'}}>{this.props.data.loves}</span>
                    </div>
                </div>
            </div>
        )
    }
}

class Love extends React.Component{
    render(){
        console.log(this.props, 'props')
        if (this.props.loveds.includes(this.props.id)) {
            return <img src={loved} alt="已收藏" onClick={this.props.loveHandle.bind(this, this.props.id, 1)}/>
        } else {
            return <img src={love} alt="收藏" onClick={this.props.loveHandle.bind(this, this.props.id, 2)}/>
        }
    }
}

export default Note