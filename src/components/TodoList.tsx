import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import todo from '../store/todo';


const TodoList: React.FC = observer(() => {

    const {todos, selectedFilter} = todo

    const removeTodo = (id: number) => {
        const shouldRemove = window.confirm('Вы точно хотите удалить эту задачу')
        shouldRemove && todo.removeTodo(id)
    }

    const removeHandler = (id: number, event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        removeTodo(id)
    }

    const filteredTodos = useMemo(() => {
        switch (selectedFilter) {
            case 'completed':
              return [...todos.filter(todo => todo.completed)];
            case 'uncompleted':
              return [...todos.filter(todo => !todo.completed)];
            default:
             return [...todos]
        }
    }, [todos, selectedFilter])

    return (
        <div className="wrapper">
            <ul className="todo-list">
            {filteredTodos.length 
            ? filteredTodos.map((t) => {
                const classes = ['todo']
                t.completed && classes.push('completed')

                return (
                    <li key={t.id} className={classes.join(' ')}>
                        <label>
                            <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)} />
                            <span>{t.title}</span>
                            <i onClick={event => removeHandler(t.id, event)} className="material-icons teal-text">delete</i>
                        </label> 
                    </li>
                )
            })
            : <h5>Список задач пуст</h5>
            }              
            </ul>
        </div>
    );
})

export default TodoList;