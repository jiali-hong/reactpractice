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
      onload: true
  }
  componentDidMount() {
    this.setState({onload: false})
 }

  initialization = () => {
    localStorage.setItem('users',JSON.stringify({KvCalc:{password:"KvCalc123456",email:"jialicehong@gmail.com"}}));
    localStorage.setItem('currentUser','');
    localStorage.setItem('theme','dark');
  }
  
  getAll = () => {
    let i = 0;
    while (localStorage.key(i) !== null){
      console.log(localStorage.key(i));
      i++;
    }
    
  }

  onLOAD = () => {
    if (this.state.onload === false){
      return this.getPage()
    }
    return <div></div>
  }
  // getAll()
  
  // localStorage.setItem('users', JSON.stringify({user1:{password:"123456",email:"user1@123.com"},user2:{password:"123456",email:"user2@123.com"},user3:{password:"123456",email:"user3@123.com"},user4:{password:"123456",email:"user4@123.com"}}))
  // localStorage.setItem('users',JSON.stringify({}))

  getPage = () => {
    const route = window.location.pathname;
    if (route === '/scores') return <ViewScores theme={this.state.theme}/>;
    if (route === '/settings') return <Settings theme={this.state.theme} setTheme={theme => this.setState({theme:theme})}/>;
    if (route === '/login') return <LoginForm theme={this.state.theme} refresh={() => this.setState({key:this.state.key + 1})}/>;
    if (route === '/register') return <RegisterForm theme={this.state.theme} refresh={() => this.setState({key:this.state.key + 1})}/>;
    if (route === '/user') return <UserDetails theme={this.state.theme}/>;
    return <Game startNewGame={() => this.setState({key:this.state.key + 1})} gameKey={this.state.key} theme={this.state.theme} setTheme={appearance => this.setState({theme:appearance})}/>
  }
  render(){
    return (
      <div key={this.state.key}>
        {this.onLOAD()}
        <NavBar theme={this.state.theme}/>
      </div>
    );
  }
    
}

export default App;
