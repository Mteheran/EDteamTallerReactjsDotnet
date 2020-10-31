import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import UserComponent from './Components/UserScreen'
import ChatRoomScreen from './Components/ChatRoomsScreen'

function App() {

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
          <UserComponent />
      </div>
    );
  }
 
}

export default App;
