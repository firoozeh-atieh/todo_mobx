import React, { Component } from 'react';
import {observer} from "mobx-react";



@observer
class TodoItem extends Component{
    ontoggle=()=>{
        this.props.todo.toggle();
    }

    removeItem=id=>{
        
        //this.props.todo.destroy();
       // this.props.todo.removeItem(id)


    }
    render(){
const {todo}=this.props;

        return(
            <li className={todo.completed?"completed":""}>
            
        <input onChange={this.ontoggle} type="checkbox" classname="toggle" value="on" checked={todo.completed}></input>
        <lable>{todo.title}</lable>
         <button className="destroy"  onClick={this.removeItem(todo.id)}/>
        
              
            </li>

        )
    }
}
export default TodoItem;
