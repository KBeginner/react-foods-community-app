import React from "react"
import "./index.css"
import food1 from '../../fonts/foods/番茄炒蛋.jpg'
import food2 from '../../fonts/foods/阳春面.jpg'
import food3 from '../../fonts/foods/红烧肉.jpg'
import food4 from '../../fonts/foods/青椒炒蛋.jpg'
import food5 from '../../fonts/foods/手抓饼.jpg'
import food6 from '../../fonts/foods/牛肉面.jpg'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPlay: false,
            foodList:[
                {
                    id: 1,
                    name: '番茄炒蛋',
                    recipes: '先把蛋炒熟，再炒番茄，然后混合翻炒。',
                    imgUrl: food1
                },
                {
                    id: 2,
                    name: '阳春面',
                    recipes: '烧开水，煮面，调料，拌面。',
                    imgUrl: food2
                },
                {
                    id: 3,
                    name: '红烧肉',
                    recipes: '烧开水，煮面，调料，拌面。',
                    imgUrl: food3
                },
                {
                    id: 4,
                    name: '青椒炒蛋',
                    recipes: '烧开水，煮面，调料，拌面。',
                    imgUrl: food4
                },
                {
                    id: 5,
                    name: '手抓饼',
                    recipes: '烧开水，煮面，调料，拌面。',
                    imgUrl: food5
                },
                {
                    id: 6,
                    name: '牛肉面',
                    recipes: '烧开水，煮面，调料，拌面。',
                    imgUrl: food6
                }
            ]
        }
    }

    startHandle(){
        this.setState({
            isPlay: !this.state.isPlay
        })
    }

    render(h) {
        let column_left = this.state.foodList.map((el,index)=>{
            if (index%2!==0) return false
            return (
                <div className="note" key={el.id}>
                    <div className="note-graph"><img src={el.imgUrl} alt={el.name}/></div>
                    <h3 className="note-title">{el.name}</h3>
                    <div className="note-info">
                        {/* <img src=""/> */}
                        头像
                    </div>
                </div>
            )
        })
        let column_right =this.state.foodList.map((el,index)=>{
            if (index%2===0) return false
            return (
                <div className="note" key={el.id}>
                    <div className="note-graph"><img src={el.imgUrl} alt={el.name}/></div>
                    <h3 className="note-title">{el.name}</h3>
                    <div className="note-info">
                        {/* <img src=""/> */}
                        头像
                    </div>
                </div>
            )
        })
        return (
            <div className="home app-page">
                <header className="header-wrap">
                    <div className="click-btn" onClick={this.startHandle.bind(this)}>点我告诉你</div>
                </header>
                <main className="body-wrap">
                    <div className="column">{column_left}</div>
                    <div className="column">{column_right}</div>
                </main>
            </div>
        )
    }
}

export default Home