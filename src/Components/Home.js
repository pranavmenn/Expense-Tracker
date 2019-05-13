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
import './home.css'
import UserLog from './UserLog';
import LogHistory from './LogHistory';
class Home extends Component{

state={
  homeSteps:0,
  expense:[{id:"",name:"",amt:""}],
}
saveExpense = (input) =>(event)=>{
  var newState=[...this.state.expense];
  const newExpense=this.state.expense.map((expense)=>{
    return{newState,[input]:event.target.value}
  })

  this.setState({
    expense:newExpense,
  })
}
addExpense = (event) =>{
  this.setState((prevState)=>({
    expense:[...prevState.expense,{id:"",name:"",amt:""}],
  }))
}
  handleSubmit = (e) => {e.preventDefault()}


  continue = () =>{
    this.props.log();
  }

  back=()=>{
    this.setState({
      homeSteps:0,
    })
  }
  goLog = () => {
    this.setState({
      homeSteps:1,
    })

  }

  goHistory=()=>{
    this.setState({
      homeSteps:2,
    })

  }
  render(){
    switch(this.state.homeSteps){



      case 1:
      return(<UserLog back={this.back} expense={this.state.expense} add={this.addExpense} sub={this.handleSubmit} save={this.saveExpense}  />);

    case 2:
      return(<LogHistory />);
    }
    return(
      <div>
      <div>
        <AppBar position="static">
          <Toolbar>

          <Typography variant="h6" color="inherit" >
            Home Page
          </Typography>
          <div className="logout">
          <Button variant="contained" color="primary" onClick={this.continue}>Logout</Button>
          </div>
          </Toolbar>
        </AppBar>
      </div>


      <Router>
      <div className="logCard">
      <div className="logCard-1">

      <Card>
        <CardMedia style={{height:0}, {paddingTop:'56.25%'}} title="Log your Expenses" image={require("./image/download1.png")} />
        <CardContent>
          <Typography>
            Click below to log your Expenses
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="primary" onClick={this.goLog}>Go to Log</Button>
        </CardActions>
      </Card>
      </div>
    <div className="logCard-2">
      <Card>
        <CardMedia style={{height:0}, {paddingTop:'56.25%'}} title="View Expense History" image={require("./image/images.jpg")} />
        <CardContent>
          <Typography>
            Click below to see your expense history
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="primary" onClick={this.goHistory}>

            Go to Log History
          </Button>
        </CardActions>
      </Card>



  /*    <Route  path="/log" exact strict render={
          ()=>{
            return(
              <UserLog expense={this.state.expense} add={this.addExpense} sub={this.handleSubmit} save={this.saveExpense}  />
            )
          }
        } />
      <Route exact path="/logHistory" render={
          ()=>{
            return(
              <LogHistory />
            )
          }
        } />*/
    </div>
    </div>
  </Router>
  </div>

    )
  }
}

export default Home;
