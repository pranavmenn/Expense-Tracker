import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/bg.css'
import UserForm from './Components/UserForm';
class App extends Component{
  render(){
    return(
      <div className="App">
        <UserForm />
      </div>
    )
  }
}

export default App;
