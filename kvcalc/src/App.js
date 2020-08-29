import React, {useState} from 'react';
import Game from './components/Game';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [key,setKey] = useState(0);
  return (
    <Game key={key} startNewGame={() => setKey(key + 1)} gameKey={key}/>
  );
}

export default App;
