import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Home from './Home'
import './bg.css'




class Login extends Component{

login = () =>{
  if(this.props.unArray.length==0){
    alert("Not registered")
  }
  else{
  for(let i=0;i<this.props.unArray.length;i++){
    if((this.props.uname==this.props.unArray[i])&&(this.props.pw==this.props.pwArray[i])){
      return(
        this.props.home()
      )
    }
    else{
      return(alert("Invalid login"))
    }
  }
}
}

continue = (event) => {
  event.preventDefault();
  this.props.nextStep();
}
  render(){

    return(
      <MuiThemeProvider>
        <div className="bg">
          <AppBar title="Enter User Details" >Enter User Details</AppBar><br />
          <Card >
            <CardContent>
          <TextField hintText="Enter User Name" label="User Name" onChange={this.props.change('uname')}   /><br />
          <TextField hintText="Enter Name" label="Password" onChange={this.props.change('pw')} /><br /><br />
          <Button variant="contained" color="primary" onClick={this.login}>Login</Button><br /><br />
          <Button variant="contained" color="primary" onClick={this.continue}>Register</Button>
            </CardContent>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default Login;
