import React, {useState} from 'react';
import axios from 'axios';
import UserScreen from './Components/UserScreen'
import ChatRoomsScreen from './Components/SalaChat';

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
       <ChatRoomsScreen></ChatRoomsScreen>
      </div>
    );
  }
}

export default App;
