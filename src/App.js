import React, {Component} from "react";
import {observer} from 'mobx-react';

import TodoEntry from "./component/TodoEntry";
import TodoItems from "./component/TodoItems";


import './App.css';

@observer
class App extends Component {
    render() {
        return [

            <div id="todoapp" className="todoapp">
                <TodoEntry />
                <TodoItems/>    
                     
            </div>,
            <footer className="info">
                <p>Written by <a href="#">Atieh firoozeh</a></p>
                <p>Project of <a href="https://maktabkhooneh.org">Maktabkhooneh</a></p>
            </footer>
        ]
    }
}


export default App;
