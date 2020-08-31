import React, {useState} from 'react';
import Game from './components/Game';
import ViewScores from './components/ViewScores'
import NavBar from './components/NavBar'
import Settings from './components/Settings'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [key,setKey] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  document.getElementById('HTML').className = theme !== 'dark' ? 'LIGHT': 'DARK';
  
  const getPage = () => {
    const route = window.location.pathname;
    if (route === '/scores') return <ViewScores theme={theme}/>;
    if (route === '/settings') return <Settings theme={theme} setTheme={setTheme}/>;
    return <Game startNewGame={() => setKey(key + 1)} gameKey={key} theme={theme} setTheme={setTheme}/>
  }
  return (
    <div key={key}>
      {getPage()}
      <NavBar theme={theme} />
    </div>
  );
}

export default App;
