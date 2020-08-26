import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import Explore from '../screens/explore'
import Home from '../screens/home'
import Notifications from '../screens/notifications'
import Subscriptions from '../screens/subscriptions'
import Library from '../screens/library'
import Search from '../screens/search'
import Account from '../screens/account'
import VideoPlayer from '../screens/video_player'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const  BottomTab = () => 
{
  return (
    <Tab.Navigator
       tabBarOptions={{
         activeTintColor: 'red',
         inactiveTintColor: 'grey'
       }}
       screenOptions={({route}) => ({
           tabBarIcon: ({color}) => {
             let iconName
             if(route.name === 'Home'){
               iconName='home'
             }else if(route.name === 'Explore'){
               iconName='explore'
             }else if(route.name === 'Subscriptions'){
               iconName='subscriptions'
             }else if(route.name === 'Library'){
               iconName='video-library'
             }else if(route.name === 'Notifications'){
               iconName='notifications'
             }
             return <Icon name={iconName} size={35} color={color} />
           }
       })}
    >
       <Tab.Screen name='Home' component={Home} />
       <Tab.Screen name='Explore' component={Explore} />
       <Tab.Screen name='Subscriptions' component={Subscriptions}/>
       <Tab.Screen name='Notifications' component={Notifications}/>
       <Tab.Screen name='Library' component={Library} />
    </Tab.Navigator>
  )
}

const RootHome = () => {
  return (
    <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}
    >
        <Stack.Screen name="bottom-tab"  component={BottomTab}/>
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="video-player" component={VideoPlayer} />
    </Stack.Navigator>
  )
}
export default RootHome
