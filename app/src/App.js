import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import UserComponent from './Components/UserScreen'
import ChatRoomScreen from './Components/ChatRoomsScreen'

function App() {

  const [message, setMessage] = useState('');
  axios.get("https://Localhost:5001/api/hello")
  .then(p=> setMessage(p.data))
  .catch(e=> console.error(e));

  if(sessionStorage.getItem('name') && sessionStorage.getItem('name') !== '')
  {
    return (
      <ChatRoomScreen></ChatRoomScreen>
    );   
  }
  else
  {
    return (

      <div className="App">      
          <p>
            {message}
          </p>
          <UserComponent />
      </div>
    );
  }
 
}

export default App;
