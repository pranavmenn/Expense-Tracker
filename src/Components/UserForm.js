import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Confirm from './Confirm';
import Login from './Login';
import Success from './Success';
import Home from './Home';
import { Formik } from "formik";



class UserForm extends Component {

  state={
    step:0,
    name:'',
    username:'',
    password:'',
    unArray:[],
    pwArray:[],
    nArray:[],
    uname:'',
    pw:''

  }

  nextStep = () =>{
    const { step }=this.state;
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
    var nameJoined=this.state.nArray.concat(this.state.name);
    var unameJoined=this.state.unArray.concat(this.state.username);
    var pwJoined=this.state.pwArray.concat(this.state.password);
    this.setState({
      nArray:nameJoined,
      unArray:unameJoined,
      pwArray:pwJoined
    })
  }

  log = () =>{
    const { step }=this.state;
    this.setState({
      step:0
    })
  }

  home = () =>{
    const { step }=this.state;
    this.setState({
      step:4
    })
  }

  handleChange = (input) => (event)=>{
    this.setState({
      [input]:event.target.value
    });
  }
  render(){
    const { step, name, username, password } = this.state;
    const { values }= {name,username,password}
    switch(step){
      case 0:
        return(<Login home={this.home} uname={this.state.uname} pw={this.state.pw} unArray={this.state.unArray} pwArray={this.state.pwArray} nArray={this.state.nArray} change={this.handleChange} nextStep={this.nextStep} /> )
      case 1:
        return(<UserDetails name={this.state.name} username={this.state.username} password={this.state.password} nextStep={this.nextStep} change={this.handleChange} values={values}/>)
      case 2:
        return(<Confirm name={this.state.name} username={this.state.username} password={this.state.password} nextStep={this.nextStep} prevStep={this.prevStep} values={values} add={this.addItem} /> )
      case 3:
        return(<Success log={this.log} uname={this.state.unArray} pwArray={this.state.pwArray}/>)

      case 4:
        return(<Home log={this.log} change={this.home} />)

    }

  }
}

export default UserForm;
