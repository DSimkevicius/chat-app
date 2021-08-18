import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxnU7ZrGdJLs4081CMOq91ZTN36QCIFqI",
  authDomain: "chat-app-7c8b1.firebaseapp.com",
  databaseURL:
    "https://chat-app-7c8b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-app-7c8b1",
  storageBucket: "chat-app-7c8b1.appspot.com",
  messagingSenderId: "603417287555",
  appId: "1:603417287555:web:c7dd93dd72354e4b6fb4b6",
  measurementId: "G-T3ZPND6ZF5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
