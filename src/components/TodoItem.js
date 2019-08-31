import React from 'react';

const TodoItem = props => {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.task.completed}
                onChange={() => props.handleChange(props.task.id)} 
            />
            <p>{props.task.text}</p>
        </div>
    )
}

export default TodoItem;