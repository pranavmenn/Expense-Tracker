import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Confirm from './Confirm';

class Register extends Component{

  nextStep = () =>{
    const { step }=this.props.state;
    this.setState({
      step:step+1
    });
  }

  prevStep = () =>{
    const { step }=this.state;
    this.setState({
      step:step-1
    });
  }

  addItem = ()=>{
    this.setState({
      nArray:this.state.nArray.push(this.state.name),
      unArray:this.state.unArray.push(this.state.username),
      pwArray:this.state.pwArray.push(this.state.password)
    })
  }

  handleChange = (input) => (event)=>{
    this.setState({
      [input]:event.target.value
    });
  }

  render(){
    const { step, name, username, password } = this.props.state;
    const { values }= {name,username,password}
    switch(step){
      case 1:
        return(<UserDetails name={this.props.name} username={this.props.username} password={this.props.password} nextStep={this.nextStep} change={this.handleChange} values={values}/>)
      case 2:
        return(<Confirm name={this.props.name} username={this.props.username} password={this.props.password} nextStep={this.nextStep} prevStep={this.prevStep} values={values} add={this.addItem} /> )
      case 3:
        return(<h1>Success</h1>)

    }

  }
}
