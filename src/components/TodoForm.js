import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        
        this.initialState = {
            id: 0,
            text: "",
            completed: false
        }

        this.state = this.initialState

        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    
    submitForm() {
        this.setState({
            id: this.state.id + 1,
            text: this.initialState.text,
            completed: this.initialState.completed
        })
        this.props.handleSubmit(this.state)
    }

    render() {
        const {text} = this.state

        return (
            <form>
                <h1>Add a todo</h1>
                <input 
                    type="text"
                    value={text}
                    name="text"
                    placeholder="Ex. Take out trash"
                    onChange={this.handleChange}
                />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}
                />               
            </form>
        )
    }
}

export default TodoForm