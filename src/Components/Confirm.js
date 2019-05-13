import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Confirm extends Component{
  continue = (event) => {
    event.preventDefault();
    this.props.add();
    
    this.props.nextStep();

  }

  back=(event)=>{
    event.preventDefault();
    this.props.prevStep();
  }
  render(){



    return(

      <MuiThemeProvider>
        <div>
          <AppBar>Confirm Details</AppBar>
          <List>
            <ListItem><ListItemText primary={ this.props.name } /></ListItem>
              <ListItem><ListItemText primary={ this.props.username } /></ListItem>
                <ListItem><ListItemText primary={ this.props.password } /></ListItem>
          </List><br/><br />
          <Button variant="contained" color="primary" onClick={this.continue}>Confirm</Button>
          <Button variant="contained" color="primary" onClick={this.back}>Go Back</Button>



        </div>
      </MuiThemeProvider>
    )
  }
}

export default Confirm;
