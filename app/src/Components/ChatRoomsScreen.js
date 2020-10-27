import React, {useState} from 'react'
import './ChatRoomScreen.css'
import axios from 'axios'

export default function ChatRoomsScreen() {

    const [room, setRoom] = useState([])

    axios.get(process.env.REACT_APP_API_URL + "Room")
    .then(p=> setRoom(p.data))
    .catch(error=> console.error(error));

    return (
        <div className="ed-grid">
        <div><h1>Bienvenido a la sala de chat</h1></div>
        <div className="ed-container chat">
            
            <div className="s-10 chat-menu">
             {
                 room.map(item=> 
                    {
                    return <button className="chat-menu__option"># {item.name}</button>
                    })
             }
            </div>
            <div className="ed-item s-90">
                <div className="chat-info">
                    <div className="chat-info__window">
                        <span className="chat-info__user">User Name:</span>
                        <p className="chat-info_info">Hola Mundo!!!</p>
                    </div>
                </div>
                <textarea className="chat-text" placeholder="Escriba un mensaje"></textarea>
            
            </div>

        </div>
        </div>
    )
}