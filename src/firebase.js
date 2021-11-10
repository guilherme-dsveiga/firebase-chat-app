import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "-",
        authDomain: "-",
        projectId: "-",
        storageBucket: "-",
        messagingSenderId: "-",
        appId: "-"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
