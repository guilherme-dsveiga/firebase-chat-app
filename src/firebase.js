import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBr0xIin0Ce-Gwxf-EW_4J98BLZT9dgkzo",
        authDomain: "reactfire-chat-de65f.firebaseapp.com",
        projectId: "reactfire-chat-de65f",
        storageBucket: "reactfire-chat-de65f.appspot.com",
        messagingSenderId: "135641623297",
        appId: "1:135641623297:web:568a7b1c7d9775c44fc900"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
