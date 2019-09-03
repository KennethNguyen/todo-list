import React from 'react'

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
            <button className="deleteButton" onClick={() => props.removeTodo(props.task.id)}>Delete</button>
        </div>
    )
}

export default TodoItem