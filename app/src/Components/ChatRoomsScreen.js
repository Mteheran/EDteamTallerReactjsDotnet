import React, {useState, useEffect, useRef} from 'react'
import './ChatRoomScreen.css'
import axios from 'axios'
import * as signalR from '@microsoft/signalr'

export default function ChatRoomsScreen() {

    const [room, setRoom] = useState([])
    const [messages, setMessages] = useState([])
    const [currentRoom, setcurrentRoom] = useState('')
    const [connectionSignalR, setconnectionSignalR] = useState({})

    const lastmessage = useRef(null)
    const lastRoom = useRef(null)
    lastmessage.current = messages;
    lastRoom.current = currentRoom;

    useEffect( ()=>
    {
        axios.get(process.env.REACT_APP_API_URL + "Room")
        .then(p=> 
            {
                setRoom(p.data);
                setcurrentRoom(p.data[0]);
                getMessages(p.data[0].roomId);
            })
        .catch(error=> console.error(error));


        let connection = new signalR.HubConnectionBuilder()
        .withUrl(process.env.REACT_APP_API_URL +"chat")
        .build();
 
        connection.on("RecievedMessage", message => {
            if(message.roomId == lastRoom.current.roomId)
            {
                setMessages([message, ...lastmessage.current])
            }           
        });
        
        connection.start()
            .then(() => console.log('connection started'));

        setconnectionSignalR(connection);
    }, []); 

    const sendMessage = (event) =>
    {
        if(event.key === 'Enter')
        {
            const name = sessionStorage.getItem('name');
            const message =  { userName:name, content: event.target.value, roomId: currentRoom.roomId }
            axios.post(process.env.REACT_APP_API_URL + "Message", message)
            .then(()=>  { 
                setMessages([message, ...messages])
                connectionSignalR.invoke("SendMessage", message)
                document.getElementsByClassName("chat-text")[0].value = '';
            })
            .catch(error=> console.error(error))
        }
    }

    const changeRoom = (room) =>
    {
        setcurrentRoom(room);
        getMessages(room.roomId);
    }

    const getMessages = (roomId)=>
    {
        axios.get(process.env.REACT_APP_API_URL + "Message/GetMessagesByRoomId/" + roomId)
        .then(p=> 
            { 
                setMessages(p.data)
            })
        .catch(error=> console.error(error));
    }

    return (
        <div className="ed-grid">
        <div><h1>Bienvenido a la sala de chat</h1></div>
        <div className="ed-container chat">
            
            <div className="s-10 chat-menu">
             {
                 room.map(item=> 
                    {
                    return <button  key={item.roomId} className={item.roomId == currentRoom.roomId ? "chat-menu__selected" : "chat-menu__option"} onClick={()=> changeRoom(item)}># {item.name}</button>
                    })
             }
            </div>
            <div className="ed-item s-90">
                <div className="chat-info">
                    {
                        messages.map(item=> 
                            {
                                return  <div key={item.messageId} className="chat-info__window">
                                            <span className="chat-info__user">{item.userName} dice:</span>
                                            <p className="chat-info_info">{item.content}</p>
                                        </div>

                            })
                    }
                </div>
                <textarea className="chat-text" placeholder="Escriba un mensaje" onKeyUp={sendMessage}></textarea>
            
            </div>

        </div>
        </div>
    )
}