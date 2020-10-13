import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos=[];
    @observable viewStore='ALL_TODOS';
    lastid=0;

    
    get todos() {
        return this.todos;
      }

    @computed
    get remainingCount() {
      return this.todos.filter(todo => !todo.completed).length;
    }
    @computed get filterTodo() {
      if (this.viewStore === "ALL_TODOS") {
        return this.todos;
      } else if (this.viewStore === "ACTIVE_TODOS") {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.viewStore === "COMPLETED_TODOS") {
        return this.todos.filter(todo => todo.completed);
      }
  
     // return this.todos;
    }

    @action
    addTodo=title=>
    {
        if (title.trim().length > 0) {
        this.todos.push(new TodoModel(this,title,false,this.lastid++))
        }
    };
    @action deleteTodo = id => {
      const index = this.todos.findIndex(item => item.id === id);
      this.todos.splice(index, 1);
    };

    @action
    changeViewStore= filter => {
      this.viewStore=filter;
    };


    @computed 
    get clearCompletedCount() {
      return this.todos.filter(todo => todo.completed).length;
    };
  
    @action 
    clearCompletedTodo = () => {
      this.todos = this.todos.filter(todo => !todo.completed);
    };


}

const todoStore = new TodoStore()
export default todoStore
