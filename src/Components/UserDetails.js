import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class UserDetails extends Component{

continue = (event) => {
  event.preventDefault();
  this.props.nextStep();
}

  render(){

    return(
      <MuiThemeProvider>
        <div>
          <AppBar title="Enter User Details" >Enter User Details</AppBar><br />
          <TextField hintText="Enter Name" label="Name" onChange={this.props.change('name')} defaultValue={this.props.name}  /><br />
          <TextField hintText="Enter User Name" label="User Name" onChange={this.props.change('username')} defaultValue={this.props.username}  /><br />
          <TextField hintText="Enter Name" label="Password" onChange={this.props.change('password')} defaultValue={this.props.password}/><br /><br />
          <Button variant="contained" color="primary" onClick={this.continue}>Sign Up</Button>

        </div>
      </MuiThemeProvider>
    );
  }

}

const styles = {
  button:{
    margin:15
  }
}
export default UserDetails;
