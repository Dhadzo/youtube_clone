import React, { useEffect } from 'react'
import SubscribedChannel from '../components/subscribed_channel'
import VideoItem from '../components/video_item'
import Header from '../components/header'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'




const Card = (props) => {
    return (
        <View>
            <TouchableOpacity>  
                <View style={styles.option}>
                     <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const SubscriptionsSignedIn = () => {

    const subscriptions = useSelector(state => state.subscriptions)
    const subscriptionsVideos = useSelector(state => state.subscriptionsVideos)

    const fetchSubscriptions = () => {
        /* Insert the Api which fetches the authenticated user's subscribed channels and dispatches them to the redux store 
        */
    }
    const fetchSubscriptionsVideos = () => {
        //Insert the Api which fetches the authenticaed user's subscribed channel's latest videos and dispatches them to the redux store
    }
    useEffect(() => {
        fetchSubscriptions()
        fetchSubscriptionsVideos()
    },[])

  return (
       <View>
           <ScrollView>
              <ScrollView
                  horizontal={true}
                  borderBottomWidth={0.5}
                  contentContainerStyle={styles.subscribedChannelsTab}
                  showsHorizontalScrollIndicator={false}  
                >
                    {
                        subscriptions.map(item=> (
                            <SubscribedChannel /* Add the props for channel name and image  */ />
                        ))
                    }

              </ScrollView>
              <ScrollView 
                  horizontal={true}
                  contentContainerStyle={styles.subscribedOptions}
                  showsHorizontalScrollIndicator={false}  
                >
                    <Card title="All videos" />
                    <Card title="Today" />
                    <Card title="Continue Watching" />
                    <Card title="Unwatched" />
                    <Card title="Live" />
                    <Card title="Posts" />

              </ScrollView>
              {
                  subscriptionsVideos.map(item => (
                      <VideoItem /* Add the props for videoId, channel and title  */ />
                  ))
              }
          </ScrollView>
       </View>
  )
}

const SubscriptionsSignedOut = () => {
    return (
        <View style={{justifyContent:'center',alignItems:'center', marginTop:120}}>
              <Icon name="subscriptions" size={150} color="grey"  />
                <Text style={{fontSize:25,fontWeight:'bold', marginTop:65, width:260,textAlign:'center'}}>
                  Don't miss new videos
                </Text>
                <Text style={{fontSize:17, marginVertical:10, width:260,textAlign:'center'}}>
                  Sign in to see updates from your favorite YouTuvbe channels
                </Text>
              {/* 
                  Implement the signIn function and uncomment this.

                  <Button
                    onPress={() => signIn()}
                    title="Sign In"
                    color="blue"
                  />
                  
              */}
        </View>  
    )
}

const  Subscriptions = () => 
{
    const currentUser = useSelector(state => state.currentUser)
    return (
          <View>
             <Header />
              {
                  currentUser
                  ? <SubscriptionsSignedIn currentUser={currentUser} />
                  : <SubscriptionsSignedOut />
              }
          </View>
    )
    
}

const  styles = StyleSheet.create({
 
  subscribedChannelsTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscribedOptions: {
    color:'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  option: {
    padding: 10,
    margin: 10,
    backgroundColor: 'grey',
    borderRadius: 15,
  },
  title: {
     fontSize: 18
  }
})

export default Subscriptions