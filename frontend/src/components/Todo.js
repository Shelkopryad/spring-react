import React, { Component } from 'react';
import InputField from './InputField';
import { urlGetTodos, urlCreateTodo, urlClearTodos } from '../routes'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.item.id,
      title: props.item.title,
      description: props.item.description,
      date: props.item.date,
      completed: props.item.completed
    }
  }

  handleChange() {
    this.setState({
      completed: true
    })
  }

  render() {
    return (
      <li className="list-group-item">
        <label htmlFor={ "taskCheck" + this.state.id }
          className={ this.state.completed === true ? "alertMy alert-success" : "alertMy alert-danger" }>
          <h5>{ this.state.title }</h5>
          <p>{ this.state.description }</p>
          <h6>{ this.state.date }</h6>
        </label>

        <input id={ "taskCheck" + this.state.id }
          type="checkbox" 
          checked={ this.state.completed } 
          onChange={ this.handleChange.bind(this) }
        />
      </li>
    )
  }
}

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      date: "",
      taskItems: []
    }
  }

  componentDidMount() {
    fetch(urlGetTodos)
    .then(response => {
      return response.json() 
    })
    .then(
      result => {
        this.setState({
          taskItems: result.map(task => <TodoItem key={ task.id } item={ task } />)
        });
      }
    )
  }

  titleChange(event) {
    this.setState({ title: event.target.value })
  }

  descriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  dateChange(event) {
    this.setState({ date: event.target.value })
  }

  createTodo() {
    fetch(urlCreateTodo, { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        date: this.state.date
      })
    })
    .then(response => {
      return response.json() 
    })
    .then(
      result => {
        this.setState({
          taskItems: result.map(task => <TodoItem key={ task.id } item={ task } />)
        });
      }
    )
  }

  clearTodos() {
    fetch(urlClearTodos, { 
      method: 'POST'
    })
    .then(
      this.setState({
        taskItems: []
      })
    )
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <form className='col-10'>
            <InputField labelText='Title' id='title' type='text' onChange={ this.titleChange.bind(this) } />
            <InputField labelText='Description' id='description' type='textarea' onChange={ this.descriptionChange.bind(this) } />
            <InputField labelText='Date' id='calendar' type='date' onChange={ this.dateChange.bind(this) } />
          </form>
          <div className='col-2'>
            <button className="btn btn-outline-secondary" type="button" onClick={ this.createTodo.bind(this) }>Create ToDo</button>
            <button className="btn btn-outline-secondary" type="button" onClick={ this.clearTodos.bind(this) }>Clear ToDo's</button>
          </div>
        </div>
        <ul className='todo-list'>
          { this.state.taskItems }
        </ul>
      </div>
    );
  }
}

export default Todo;
