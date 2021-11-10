import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js';

function SignIn() {
        function signInWithGoogle() {
                const provider = new firebase.auth.GoogleAuthProvider();
                auth.signInWithPopup(provider)
        }

        return (
                <div>
                       <button className="login" onClick={signInWithGoogle}>Logar com o Google</button>
                </div>
        )
}

export default SignIn
