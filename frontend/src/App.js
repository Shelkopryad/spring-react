import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calculator from './components/Calculator'
import Customers from './components/Customers'
import Todo from './components/Todo'

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/customers">Customers</Link></li>
      <li><Link to="/todo">ToDo</Link></li>
    </ul>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/calculator" component={ Calculator } />
          <Route path="/customers" component={ Customers } />
          <Route path="/todo" component={ Todo } />
        </div>
      </Router>
    );
  }
}

export default App;
