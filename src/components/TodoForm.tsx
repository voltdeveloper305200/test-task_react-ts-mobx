import React from 'react';

interface TodoFormProps {
   onAdd(title: string): void; 
}

const TodoForm:React.FC<TodoFormProps> = ({onAdd}) => {
    const ref = React.useRef<HTMLInputElement>(null)

    const handleClickAdd = () => {
        ref.current!.value !== '' ? onAdd(ref.current!.value) : alert('Вы ничего не ввели') 
        ref.current!.value = ''
    }

    return (
        <div className="todo-form">
            <h4>Добавьте задачу в список</h4>
            <div className="todo-form__add">
                <input ref={ref} placeholder="Введите текст задачи" type="text"></input>
                <button onClick={handleClickAdd} className="btn waves-effect waves-light" type="submit" name="action">
                    <i className="material-icons">add</i>
                </button>
            </div>
        </div>
    );
}

export default TodoForm;