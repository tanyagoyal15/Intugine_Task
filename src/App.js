import React , {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step : 1,
      name : '',
      email : ''
    }
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.email) {
      this.nextStep();
    } else alert("Please login First");
  }

  render() {

    switch (this.state.step) {
      case 1: return (
        <div className="form">
          <h1>Login</h1>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>Email</label>
          <input type="email" name="email" onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      )
      case 2: return (
        <Dashboard
          name={this.state.name}
          email={this.state.email}
        />
      )
    }
  }
}

