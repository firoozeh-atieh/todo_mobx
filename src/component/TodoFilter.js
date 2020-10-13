import React, {Component} from 'react';
import {observer} from "mobx-react";
import todoStore from '../stores/TodoStore';

@observer
class TodoFilter extends Component {
  render() {
      
      return(
          <div >
          <a className="todo-count">
         {this.props.todoCount} item left
          </a>
          <div className="filters">
              <ul>
                <li>
                  <a>
                  <button   className="all"  onClick={() => this.todoStore.changeViewStore("ALL_TODOS")}>
              All
            </button>
                  </a>
                </li>
                <li>
                  <a>
                  <button   className="active"  onClick={() => this.todoStore.changeViewStore("ACTIVE_TODOS")}>
        Active
      </button>
                  </a>
                </li>
                <li>
                  <a>
                  <button className="completed" onClick={() => this.todoStore.changeViewStore("COMPLETED_TODOS")}>
        Completed
      </button>
                  </a>
                </li>
              </ul>

          </div>
              <button className="clear-completed"
              onClick={() => this.todoStore.clearCompletedTodo()} 
              >
							Clear completed
						</button>
          </div>
            
        );
      }
}

export default TodoFilter;
