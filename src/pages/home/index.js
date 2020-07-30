import React from "react"
import "./index.css"
import data from '../../api/data'
import Note from '../../components/Note'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPlay: false,
            noteList: data.notes
        }
    }

    startHandle(){
        this.setState({
            isPlay: !this.state.isPlay
        })
    }

    render(h) {
        // 奇数项
        let column_left = this.state.noteList.map((el,index)=>(index%2!==0?'':<Note key={index} data={el}/>))
        // 偶数项
        let column_right = this.state.noteList.map((el,index)=>(index%2===0?'':<Note key={index} data={el}/>))
        return (
            <div className="home app-page">
                {/* <header className="header-wrap">
                    <div className="click-btn" onClick={this.startHandle.bind(this)}>点我告诉你</div>
                </header> */}
                <main className="body-wrap">
                    <div className="column">{column_left}</div>
                    <div className="column">{column_right}</div>
                </main>
            </div>
        )
    }
}

export default Home