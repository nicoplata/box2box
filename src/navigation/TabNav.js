import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from "./RootNavigation"
import Profile from '../screens/Profile'
import Shop from "../screens/Shop"
import { colors } from '../theme/colors'

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title:"", headerShown: false }} >
      <Tab.Screen 
        options={{
          tabBarIcon: ({focused}) =>
           <Entypo name='shop' size={24} color={focused ? colors.ligthBlue : "black"}/>
        }}
        name="rootNavigation" 
        component={RootNavigation}
      />
      <Tab.Screen 
        options={{
          tabBarIcon: ({focused}) =>
           <Ionicons name="person-circle-outline" size={24} color={focused ? colors.ligthBlue : "black"} />
        }}
        name="profile" 
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
           <FontAwesome5 name="shopify" size={24} color={focused ? colors.ligthBlue : "black"} />
        }}
        name="shop" 
        component={Shop}
      />
    </Tab.Navigator>
  )
}

export default TabNav