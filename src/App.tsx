import React, { useState } from 'react';
import FilterTodo from './components/FilterTodo';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { IFilter} from './interfaces';
import todo from "./store/todo";
import './styles/app.scss';

function App() {
  const [options] = useState<IFilter[]>([
    {value: 'all', name: 'Все задачи'},
    {value: 'completed', name: 'Завершенные задачи'},
    {value: 'uncompleted', name: 'Незавершенные задачи'},
  ])

  const addHandler = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false
    }
    todo.addTodo(newTodo)
  }


  const checkSelectedTodos = (filter: string) => {    
    todo.filterTodo(filter)
  }


  return (
    <>
    <Navbar appTitle='Todo List' />
    <div className="container">
      <TodoForm onAdd={addHandler}/>
      <FilterTodo value={todo.selectedFilter} options={options} onChange={checkSelectedTodos}></FilterTodo>
      <TodoList/>
    </div>
    </>
  );
}

export default App;
