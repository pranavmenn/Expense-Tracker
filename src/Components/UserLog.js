import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
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
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './log.css'

class UserLog extends Component{

  render(){
    return(
<div>
<AppBar position="static">
  <Toolbar>

  <Typography variant="h6" color="inherit" >
    Log your Expense
  </Typography>
  <div>
  <Button variant="contained" color="primary" onClick={this.props.back}>Go Back</Button>

  </div>
  </Toolbar>
</AppBar>
<div className="card">


      <form onSubmit={this.props.sub}>
      <TextField hintText="Expense ID" label="Expense ID"  /><br />
      <TextField hintText="Expense Name" label="Expense Name"  /><br />
      <TextField hintText="Enter Amount" label="Amount"   /><br /><br />
      <Button variant="contained" color="primary" onClick={this.props.save}>Save Expense</Button><br />

      {
        this.props.expense.map((val,idx)=>{
          let expenseId=`Expense-${idx}`, amtId=`amt-${idx}`
          return(
            <div className="card1" key={idx}>
            <Card>
            <CardContent>
            <TextField hintText="Expense ID" label="Expense ID"  /><br />
            <TextField hintText="Expense Name" label="Expense Name"  /><br />
            <TextField hintText="Enter Amount" label="Amount"  /><br /><br />
            <Button variant="contained" color="primary" onClick={this.props.save}>Save Expense</Button>

            <Button variant="contained" color="primary" onClick={this.props.add}>Add Expense</Button>
            <br /><br />

            </CardContent>
            </Card>

            </div>
          )
        })
      }

      </form>
</div>
</div>
)
  }
}

export default UserLog;
