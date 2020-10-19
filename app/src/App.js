import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');
  axios.get("https://Localhost:5001/api/hello")
  .then(p=> setMessage(p.data))
  .catch(e=> console.error(e));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
       
      </header>
    </div>
  );
}

export default App;
