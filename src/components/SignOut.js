import React from 'react';
import { auth } from '../firebase.js';

function SignOut() {
        return (
                <div>
                        <button className="logout-button" onClick={() => auth.signOut()}>Sair</button>
                </div>
        )
}

export default SignOut
