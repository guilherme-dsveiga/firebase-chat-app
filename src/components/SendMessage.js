import React, {useState} from 'react'
import {db, auth} from '../firebase.js';
import firebase from 'firebase';

function SendMessage() {
        const [msg, setMsg] = useState('');
        const sendMessage = async (e) => {
                e.preventDefault();
                const {uid, photoURL} = auth.currentUser;
                await db.collection('messages').add({
                        text: msg,
                        photoURL,
                        uid,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
                setMsg('')
        }
        return (
                <div>
                        <form className="display-flex" onSubmit={sendMessage}>
                                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Mensagem..."></input>
                                <button className="send-button" type='submit'>Enviar</button>
                        </form>
                </div>
        )
}

export default SendMessage;
