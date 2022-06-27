import { ITodo } from './../interfaces';
import { makeAutoObservable } from "mobx"

class Todo {
    todos: ITodo[] = []
    selectedFilter: string = 'all'
    

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: ITodo) {
        this.todos = [todo, ...this.todos]
    }


    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo) 
    }

    filterTodo(filter: string) {
        this.selectedFilter = filter
    
    }
}

export default new Todo()