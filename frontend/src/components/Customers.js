import React, { Component } from 'react';
import { urlGetCustomer, urlAddCustomer } from '../routes'
import InputField from './InputField';

class Customers extends Component {

  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      surname: "",
      date: "",
      customer: {}
    }
  }

  addCustomer() {
    fetch(urlAddCustomer, { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        name: this.state.name,
        surName: this.state.surname,
      })
    })
    .then(response => {
      return response.json() 
    })
    .then(
      result => {
        this.setState({
          customer: result,
          name: result['name'],
          surname: result['surName']
        });
      }
    )
  }

  getCustomer() {
    var url = new URL(urlGetCustomer)
    var params = { id: this.state.id }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
    fetch(url)
    .then(response => {
      return response.json() 
    })
    .then(
      result => {
        this.setState({
          customer: result,
          name: result['name'],
          surname: result['surName']
        });
      }
    )
  }

  idChange(event) {
    this.setState({id: event.target.value})
  }

  nameChange(event) {
    this.setState({name: event.target.value})
  }

  surnameChange(event) {
    this.setState({surname: event.target.value})
  }

  dateChange(event) {
    this.setState({date: event.target.value})
  }

  render() {
    return (
      <div className='container'>
        <div>
          <form>
            <InputField labelText='Id' id='id' type='text' onChange={ this.idChange.bind(this) } />
            <InputField labelText='Name' id='name' type='text' onChange={ this.nameChange.bind(this) } />
            <InputField labelText='Surname' id='surname' type='text' onChange={ this.surnameChange.bind(this) } />
            <InputField labelText='Date' id='calendar' type='date' onChange={ this.dateChange.bind(this) } />
          </form>
          <div>
            <button className="btn btn-outline-secondary" type="button" onClick={ this.addCustomer.bind(this) }>Add customer</button>
            <button className="btn btn-outline-secondary" type="button" onClick={ this.getCustomer.bind(this) }>Get customer</button>
          </div>
        </div>
        <div>
          <h3>{ this.state.date } { this.state.customer['name'] } { this.state.customer['surName'] }</h3>
        </div>
      </div>
    );
  }
}

export default Customers;
