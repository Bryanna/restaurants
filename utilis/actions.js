import { firebaseApp } from "./firebase"
import * as firebase from 'firebase' 
import 'firebase/firestore'

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () => {
    let islogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (islogged = true)
 
    })
}