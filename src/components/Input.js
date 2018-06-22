import React, { Component } from 'react';

class Input extends Component {
    state = {
        text: ''
    };
handleChange = (ev) => {
    ev.preventDefault()
    this.setState({
        text: ev.target.value
    })
}
addTask = (ev) => {
    ev.preventDefault()
    const text = this.state.text
    if (text) {
        this.props.addTask(text)
        this.setState({ text: '' })
    }  
}

    render() {
        return (
            <div className="container input-group mb-3 ">
            {console.log(this.props, this.state)}
                <input
                    value={this.state.text}
                    onChange={this.handleChange}
                    type="text" 
                    className="form-control" 
                    placeholder="Add task" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                <button 
                    onClick={this.addTask}
                    className="btn btn-outline-secondary" 
                    type="button"
                >
                    Button
                </button>
                </div>
            </div>
        );
    }
}

export default Input;