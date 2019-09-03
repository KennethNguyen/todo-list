/* TODO: 
        Ideas: 
        -Bind enter key to input text/submit section
        -Time stamp for form (!remindme) 
        -Local storage / Cloud storage
        -Drag element API
        -Sections for Completed and Not Completed
        -Dark/Light mode onChange
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
        this.removeTodo = this.removeTodo.bind(this)
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
    
    removeTodo(id) {
        const {todos} = this.state
        console.log(`Current ID: ${id}`)
        this.setState({
            todos: todos.filter((todo) => {
                return todo.id !== id 
            })
        })
    }

    render() {
        const todoComponent = this.state.todos.map(todo => 
        <TodoItem 
            key={todo.id} 
            task={todo} 
            handleChange={this.handleChange} 
            removeTodo={this.removeTodo}
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