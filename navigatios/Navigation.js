import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'
import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
               <Tab.Screen 
                    name="restaurants" 
                    component={RestaurantsStack} 
                    options={{title: "Restaurantes"}}  />
               <Tab.Screen 
                    name="favorites" 
                    component={FavoritesStack}
                    options={{title: "Favoritos"}}  />
               <Tab.Screen 
                    name="top-Restaurants" 
                    component={TopRestaurantsStack}
                    options={{title: "Top 10"}}  />
               <Tab.Screen 
                    name="search" 
                    component={SearchStack}
                    options={{title: "Buscar"}}  />
               <Tab.Screen 
                    name="account" 
                    component={AccountStack} 
                    options={{title: "Cuenta"}} />
          </Tab.Navigator>
        </NavigationContainer>
  )
}