
import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../pages/App';
import Add from '../pages/addNote/index';
import Detail from '../pages/noteDetail/index'
import Mine from '../pages/mine/index'
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(h) {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/noteDetail/:id' component={Detail}/>
                    <Route path='/addNote' component={Add}/>
                    <Route path='/mine' component={Mine}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterConfig;