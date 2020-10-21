import React, {useState} from 'react';
import axios from 'axios';
import UserScreen from './Components/UserScreen'

function App() {

  const [message, setMessage] = useState('');
  axios.get("https://Localhost:5001/api/hello")
  .then(p=> setMessage(p.data))
  .catch(e=> console.error(e));
  if(!sessionStorage.getItem('name') || sessionStorage.getItem('name') =='')
  {
    return ( 
        <div>
        <UserScreen></UserScreen>
        </div>  
          );
  }
  else
  {
    return (
      <div>
        Bienvenido a las salas
      </div>
    );
  }
}

export default App;
