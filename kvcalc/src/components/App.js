import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Game from './Game';
import ViewScores from './ViewScores'
import NavBar from './common/NavBar'
import Settings from './Settings'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import UserDetails from './UserDetails'
import AboutPage from './AboutPage';

class App extends React.Component {
  constructor(props){
    super(props)
    if (localStorage.getItem('users') === null){
      this.initialization();
    }
    // localStorage.setItem('time','600')
    document.getElementById('HTML').className = localStorage.getItem('theme') !== 'dark' ? 'LIGHT': 'DARK';
  }
  state = {
      key: 0,
      navKey: 0,
      gameKey: 0,
  }

  initialization = () => {
    localStorage.setItem('users',JSON.stringify({KvCalc:{password:"KvCalc123456",email:"jialicehong@gmail.com"}}));
    localStorage.setItem('theme','dark');
    localStorage.setItem('KvCalc',JSON.stringify({}))
    localStorage.setItem('time','600')
  }
  
  getAll = () => {
    let i = 0;
    while (localStorage.key(i) !== null){
      console.log(localStorage.key(i));
      i++;
    }
    
  }

  render(){
    return (
      <div key={this.state.key}>
        <Switch>
          <Route path="/scores" component={ ViewScores } />
          <Route path="/settings" render={() => <Settings refresh={() => this.setState({navKey:this.state.navKey + 1})} />} />
          <Route path="/login" render={() => <LoginForm refresh={() => this.setState({navKey:this.state.navKey + 1})}/>} />
          <Route path="/register" component={ RegisterForm } />
          <Route path="/user" render={() => <UserDetails refresh={() => this.setState({navKey:this.state.navKey + 1})}/>} />
          <Route path="/about" component={ AboutPage } />
          <Route render={() => <Game startNewGame={() => this.setState({gameKey:this.state.gameKey + 1})} gameKey={this.state.gameKey} key={this.state.gameKey} /> } />
        </Switch>
        <NavBar key={this.state.navKey} refresh={() => this.setState({gameKey:0})} />
      </div>
    );
  }
}

export default App;
