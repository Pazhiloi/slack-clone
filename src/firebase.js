import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBWaPotxG07RpYqTeSm8z1Zb29dT_TN78I",
  authDomain: "slack-clone-e83f9.firebaseapp.com",
  projectId: "slack-clone-e83f9",
  storageBucket: "slack-clone-e83f9.appspot.com",
  messagingSenderId: "683008039423",
  appId: "1:683008039423:web:6d306e3733150457edefca",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};