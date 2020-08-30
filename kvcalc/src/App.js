import React, {useState} from 'react';
import Game from './components/Game';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [key,setKey] = useState(0);
  const [theme, setTheme] = useState('light')
  return (
    <Game key={key} startNewGame={() => setKey(key + 1)} gameKey={key} theme={theme} setTheme={setTheme}/>
  );
}

export default App;
