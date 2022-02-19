import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../screens/Restaurants'

const Stack = createStackNavigator() 

export default function RestaurantsStack() {
  return (
      <Stack.createStackNavigator>
          <Stack.Screen
             name="restaurants" 
             component={Restaurants} 
             options={{title: "Restaurantes"}} 
          />
      </Stack.createStackNavigator>      
  )
}