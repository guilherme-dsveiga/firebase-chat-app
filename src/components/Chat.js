import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase';
import Menu from './Menu';
import SendMessage from './SendMessage';
import SignOut from './SignOut';

function Chat() {
        const [messages, setMessages] = useState([]);
        const [isOpen, setIsOpen] = useState('closed');
        useEffect(() => {
                db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
                        setMessages(snapshot.docs.map(doc => doc.data()))
                })
        }, [])

        const handleClickMenu = () => {
                if (isOpen === 'closed') {
                        setIsOpen('open')

                } else {
                        setIsOpen('closed')
                }
        }

        return (
                <div className="chat-body">
                        <div className={`sidemenu ${isOpen}`}>
                                <div className="signout">
                                        <SignOut />
                                </div>
                        </div>
                        <div className="justify-between">
                                <Menu handleClick={handleClickMenu}/>
                                <div className="messages-container">
                                        {messages.map(({ id, text, photoURL, uid }) => (
                                                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'recived'}`}>
                                                        <div className={`${uid === auth.currentUser.uid ? 'msg-p-sent' : 'msg-p-recived'}`}>
                                                                <p>{text}</p>
                                                        </div>
                                                        <img src={photoURL} alt="Foto de perfil"></img>
                                                </div>
                                        ))}
                                </div>
                        </div>
                        <SendMessage />
                </div>
        )
}

export default Chat
