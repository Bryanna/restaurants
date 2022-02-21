import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import firebase from 'firebase/app' 

import UserGuesst from './UserGuesst'
import UserLogged from './UserLogged'

export default function Account() {
    const [loggin, setloggin] = useState(null)

      firebase.auth().onAuthStateChanged((user) => {
        user !== null ? (setloggin(true)) : setloggin(false)
    })
 
    if (loggin == null) {
        return <text>Cargando...</text>
    }

  return loggin ? <UserLogged/> : <UserGuesst/>
}

const styles = StyleSheet.create({})
