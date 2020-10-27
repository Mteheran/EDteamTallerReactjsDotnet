import React from 'react'
import './ChatRoomScreen.css'

export default function ChatRoomsScreen() {
    return (
        <div className="ed-grid">
        <div><h1>Bienvenido a la sala de chat</h1></div>
        <div className="ed-container chat">
            
            <div className="s-10 chat-menu">
                <button className="chat-menu__option"># Sala 1</button>
                <button className="chat-menu__option"># Sala 2</button>
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