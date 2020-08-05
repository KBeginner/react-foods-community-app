import React from 'react'
import style from './index.module.css'
import data from '../../api/data.js'
import BackIcon from '../../fonts/back.svg'
import ShareIcon from '../../fonts/share.svg'

class Detail extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            note : data.notes.filter(el=>el.noteId===this.props.match.params.id*1)[0]
        }
    }

    backHandle(){
        this.props.history.goBack()
    }

    shareHandle(){

    }

    render(){
        return (
            <div className={style.noteDetail}>
                <header>
                    <div className={style.headerWrap}>
                        <img className={style.backIcon} src={BackIcon} alt="back" onClick={this.backHandle.bind(this)}/>
                        <span style={{display:'flex', alignItems:'center'}}>
                            <img className={style.userIcon} src={this.state.note.uerPic} alt="用户" />
                            <span style={{marginLeft: '0.5rem'}}>{this.state.note.userName}</span>
                        </span>
                    </div>
                    <div className={style.headerWrap}>
                        <span className={style.followIcon}>关注</span>
                        <img className={style.ShareIcon} src={ShareIcon} alt="分享" onClick={this.shareHandle.bind(this)}/>
                    </div>
                </header>
                <main className="app-page">
                    <div className={style.picWrapper}>
                        <img src={this.state.note.photoList[0]} alt="图片1"/>
                    </div>
                    <div className={style.content}>
                        <h4 className="title">title</h4>
                        <div>内容</div>
                    </div>
                    <div className={style.comments}>
                        评论
                    </div>
                </main>
                <footer>
                    发表评论
                </footer>
            </div>
        )
    }
}

export default Detail