import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Handle',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Trene',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Rydde',
        completed: false
      }
    ]
  }
  //Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
//Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==  id)] })
  }

  //Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete}
              delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
