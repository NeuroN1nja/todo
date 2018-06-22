import React, { Component } from 'react';
import Input from './components/Input'
import List from './components/List'


class App extends Component {
  constructor(props) {  
    super(props);

    this.state = { 
      tasks: []
    }
    
  this._nextId = this.state.tasks.length;
}

nextId() {
  return this._nextId += 1;
}

addTask = (text) => {
  const newtask = {
    id: this.nextId(),
    text: text
  }
  const tasks = [...this.state.tasks, newtask]
    this.setState({
        tasks
    })
}

deleteCard = (id) => {
  const index = this.state.tasks.findIndex(task => task.id === id);
  const tasks = [
      ...this.state.tasks.slice(0, index),
      ...this.state.tasks.slice(index + 1)
  ];
  this.setState({ tasks });
}
  render() {
    return (
      <main>
      <Input 
        addTask={this.addTask}  
      />
      <List
        tasks={this.state.tasks}
        deleteCard={this.deleteCard}
       />
       </main>
    );
  }
}

export default App;
