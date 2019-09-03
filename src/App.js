/* TODO: 
        Immediate: Form to manually add task and remove task 
        Secondary: Sections for Completed and Not Completed
        Extra: Dark/Light mode onChange, Drag element API
*/

import React from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Updates checkbox state of each task
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo 
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    // Adds a new task to todo-list on submit
    handleSubmit(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    


    render() {
        const todoComponent = this.state.todos.map(todo => 
        <TodoItem 
            key={todo.id} 
            task={todo} 
            handleChange={this.handleChange} 
        />)
        return (
            <div className="overall">
                <div className="todo-list">
                    <h1>Todo-List</h1>
                    {todoComponent}
                </div>
                <br/>
                <br />
                <div className="todo-form">
                    <TodoForm handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )    
    }
}

export default App