import React from 'react';

const TodoItem = props => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.task.completed}
                onChange={() => props.handleChange(props.task.id)} 
            />
            <p style={props.task.completed ? completedStyle : null}>{props.task.text}</p>
        </div>
    )
}

export default TodoItem;