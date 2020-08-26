import React from 'react'
import Header from '../components/header'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import RecentVideos from '../components/recent_videos'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ScrollView} from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'


const LibraryOption = (props) => {
  return (
    <View>
            <TouchableOpacity>
                <View style={styles.libraryOption}>
                  <Icon name={props.iconName} size={35} />
                  <Text  style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}

const LibrarySignedIn = () => {
  return (
      <View>
        <ScrollView>
          <Text style={{marginHorizontal: 10, marginVertical: 10, fontSize: 20}}> Recent</Text>
          <RecentVideos />
          <View style={{marginHorizontal: 20, borderBottomWidth: 0.5, marginBottom: 10}}>
          
            <LibraryOption title="History" iconName="history" />
            <LibraryOption title="Downloads" iconName="get-app" />
            <LibraryOption title="Your videos" iconName="slideshow" />
            <LibraryOption title="Watch later" iconName="watch-later" />

          </View>
          <View style={styles.playlists}>
            <View style={{flexDirection:'row' , justifyContent: 'space-between', alignItems:'center', paddingHorizontal: 10}}  >
                <Text style={{fontSize: 20}}>Playlists</Text>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                  <Text style={{fontSize: 20}}>Recently Added</Text>
                  <Icon name="arrow-drop-down" size={35} />
                </View>
            </View>
            <LibraryOption title="New Playlist" iconName="add" />
            <LibraryOption title="Liked videos" iconName="thumb-up" />
            </View>
        </ScrollView>  
      </View>
  )
          
}

const LibrarySignedOut = () => {
  return (
        <View style={{justifyContent:'center',alignItems:'center', marginTop:120}}>
              <Icon name="folder" size={150} color="grey" />
                <Text style={{fontSize:23,fontWeight:'bold', marginVertical:20, width:290,textAlign:'center'}}>
                  Enjoy your favorite videos
                </Text>
                <Text style={{fontSize:17, marginVertical:20, width:260,textAlign:'center'}}>
                  Sign in access videos that you've liked or saved
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
const  Library = () => 
{
  const currentUser = useSelector(state => state.currentUser)
  return (
    <View style={styles.body}>
        <Header />
        {
            currentUser 
            ? <LibrarySignedIn />
            : <LibrarySignedOut />
        }
    </View>   
  )
}

const styles = StyleSheet.create({
  
  body: {
    flex:1,
  },
   libraryOption: {
     flexDirection:'row',
     alignItems: 'center',
     paddingVertical: 15
   },
   title: {
     fontSize: 20,
     marginLeft: 15
   },
   playlists: {
      marginHorizontal: 20,
      marginVertical: 20
   }
})

export default Library  