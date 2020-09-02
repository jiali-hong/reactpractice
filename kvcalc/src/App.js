import React, {useState} from 'react';
import Game from './components/Game';
import ViewScores from './components/ViewScores'
import NavBar from './components/NavBar'
import Settings from './components/Settings'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import UserDetails from './components/UserDetails'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
    if (localStorage.getItem('users') === null){
      this.initialization();
    }
    
    document.getElementById('HTML').className = this.state.theme !== 'dark' ? 'LIGHT': 'DARK';
  }
  state = {
      theme: localStorage.getItem('theme'),
      key: 0,
      navKey: 0
  }
//   componentDidMount() {
//     this.setState({onload: false})
//  }

  initialization = () => {
    localStorage.setItem('users',JSON.stringify({KvCalc:{password:"KvCalc123456",email:"jialicehong@gmail.com"}}));
    localStorage.setItem('theme','dark');
    localStorage.setItem('KvCalc',JSON.stringify({}))
  }
  
  getAll = () => {
    let i = 0;
    while (localStorage.key(i) !== null){
      console.log(localStorage.key(i));
      i++;
    }
    
  }
  // getAll()
  
  // localStorage.setItem('users', JSON.stringify({user1:{password:"123456",email:"user1@123.com"},user2:{password:"123456",email:"user2@123.com"},user3:{password:"123456",email:"user3@123.com"},user4:{password:"123456",email:"user4@123.com"}}))
  // localStorage.setItem('users',JSON.stringify({}))
  render(){
    return (
      <div key={this.state.key}>
        <Switch>
          <Route path="/scores" render={() => <ViewScores theme={this.state.theme} />} />
          <Route path="/settings" render={() => <Settings theme={this.state.theme} setTheme={theme => this.setState({theme:theme})} />} />
          <Route path="/login" render={() => <LoginForm theme={this.state.theme} refresh={() => this.setState({navKey:this.state.navKey + 1})}/>} />
          <Route path="/register" render={() => <RegisterForm theme={this.state.theme}/>} />
          <Route path="/user" render={() => <UserDetails theme={this.state.theme} refresh={() => this.setState({navKey:this.state.navKey + 1})}/>} />
          <Route render={() => <Game startNewGame={() => this.setState({key:this.state.key + 1})} gameKey={this.state.key} theme={this.state.theme} setTheme={appearance => this.setState({theme:appearance})}/> } />
        </Switch>
        <NavBar theme={this.state.theme} key={this.state.navKey}/>
      </div>
    );
  }
}

export default App;
