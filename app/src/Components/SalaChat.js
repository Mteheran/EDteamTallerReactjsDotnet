import React from 'react'
import 'ed-grid'
import './SalaChat.css'

export default function ChatRoomsScreen() {
    /*
    const [channels, chatInfo] = useState('');
    const getChannels = () => {
        
    }
    const getChatInfo = () => {
        
    }
    */
    return (
        <div class="ed-container chat">
            <div class="s-10 chat-menu">
                <button class="chat-menu__option">Channel1</button>
                <button class="chat-menu__option">Channel1</button>
                <button class="chat-menu__option">Channel1</button>
                <button class="chat-menu__option">Channel1</button>
                <button class="chat-menu__option">Channel1</button>
                <button class="chat-menu__option">Channel1</button>
                <button class="chat-menu__option">Channel1</button>
                <button class="chat-menu__option">Channel1</button>
            </div>
            <div class="ed-item s-90">
                <div class="chat-info">
                    <div class="chat-info__window">
                        <span class="chat-info__user">Mi nombre es blablabla</span>
                        <p class="chat-info__info">blablablablablablablablablabla</p>
                    </div>
                    <div class="chat-info__window">
                        <span class="chat-info__user">Mi nombre es blablabla</span>
                        <p class="chat-info__info">blablablablablablablablablabla</p>
                    </div>
                    <div class="chat-info__window">
                        <span class="chat-info__user">Mi nombre es blablabla</span>
                        <p class="chat-info__info">blablablablablablablablablabla</p>
                    </div>
                    <div class="chat-info__window">
                        <span class="chat-info__user">Mi nombre es blablabla</span>
                        <p class="chat-info__info">blablablablablablablablablabla</p>
                    </div>
                    <div class="chat-info__window">
                        <span class="chat-info__user">Mi nombre es blablabla</span>
                        <p class="chat-info__info">blablablablablablablablablabla</p>
                    </div>
                </div>
                <textarea class="chat-text" placeholder="write a message..."></textarea>
            </div>
        </div>
    )
}