import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp8JW0RcBVx43zS-2DUXZuU9krsGepRTk",
    authDomain: "restaurants-c762c.firebaseapp.com",
    projectId: "restaurants-c762c",
    storageBucket: "restaurants-c762c.appspot.com",
    messagingSenderId: "452798347353",
    appId: "1:452798347353:web:4d8e40fe889a0ad7841948"
  }
  
  // Initialize Firebase
 export const firebaseApp = firebase.initializeApp(firebaseConfig)