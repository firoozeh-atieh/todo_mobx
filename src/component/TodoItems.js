import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import {observer} from "mobx-react"
import todoStore from '../stores/TodoStore';
import TodoFilter from "./TodoFilter";


@observer
class TodoItems extends Component {
    render() {
        
        return(
            <div className="main">
                    
<ul className="todo-list">
    {
        todoStore.filterTodo.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))

    }
</ul>
<TodoFilter todoCount={todoStore.remainingCount}  /> 

</div>
        );
    }
}
export default TodoItems;