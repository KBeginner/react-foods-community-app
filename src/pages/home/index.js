import React from "react"
import Style from "./index.module.css"
import data from '../../api/data'
import Note from '../../components/Note/Note'

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
            <div className="app-page">
                {/* <header className={Style.bodyWrap}>
                    <div className={Style.clickBtn} onClick={this.startHandle.bind(this)}>点我告诉你</div>
                </header> */}
                <main className={Style.bodyWrap}>
                    <div className={Style.column}>{column_left}</div>
                    <div className={Style.column}>{column_right}</div>
                </main>
            </div>
        )
    }
}

export default Home