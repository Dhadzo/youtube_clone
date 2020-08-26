import React,{ useEffect } from 'react'
import Notification from '../components/notification'
import Header from '../components/header'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import {Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const NotificationsSignedOut = () => {
  return (
      
      <View style={{justifyContent:'center',alignItems:'center', marginTop:120}}>
            <Icon name="notifications" size={150} color="grey" />
              <Text style={{fontSize:23,fontWeight:'bold', marginVertical:20, width:290,textAlign:'center'}}>
                Your notifications live here.
              </Text>
              <Text style={{fontSize:17, marginVertical:20, width:290,textAlign:'center'}}>
                Subscribe to your favorite channels to get notified about their latest videos
              </Text>               
      </View>  
  )
}

const NotificationsSignedIn = () => {
  
    const notifications = useSelector(state => state.notifications)


    const  fetchNotifications = () => {
        //Insert api which fetches notifications for the authenticated user and dispatches them to the redux store
    }
    useEffect(() => {
        fetchNotifications()
    },[])

    return (
      <View>
          <ScrollView>
              {
                notifications.map(item => (
                  <Notification /* Add the notifications props here */ />
                ))
              }
          </ScrollView>
      </View>

    )

}


const  Notifications = () => 
{
  const currentUser = useSelector(state => state.currentUser)
  return (
       <View>
           <Header />
            {
               currentUser 
               ? <NotificationsSignedIn />
               : <NotificationsSignedOut />
            }

        </View>    
  )
}


export default Notifications