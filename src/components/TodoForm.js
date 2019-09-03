import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        
        this.state = {
            id: 0,
            text: "",
            completed: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    
    submitForm() {
        this.setState({
            id: this.state.id + 1
        })
        this.props.handleSubmit(this.state)
        
    }

    render() {
        return (
            <form>
                <h1>Add a todo</h1>
                <input 
                    type="text"
                    value={this.state.text}
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