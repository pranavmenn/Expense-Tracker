import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Success extends Component{

  continue = (event) => {
    event.preventDefault();
    this.props.log();

  }
  render(){
    console.log(this.props.unArray);
    return(
      <div>
      <h1>Success</h1><br />
      <Button variant="contained" color="primary" onClick={this.continue}>Login</Button>
      </div>
    )

  }

}
export default Success;
