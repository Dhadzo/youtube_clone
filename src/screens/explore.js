import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import VideoItem from '../components/video_item'
import Header from '../components/header'
import { useSelector} from 'react-redux'
import { ScrollView} from 'react-native-gesture-handler'
import { View, Text, StyleSheet, FlatList} from 'react-native'



const LittleCard = (props) => {
  
  return (
              <View 
                  style={{
                    backgroundColor:props.color,
                    borderRadius:10,
                    margin:10,
                    justifyContent: 'space-around',
                    width:150,
                    flexDirection: 'row',
                    alignItems:'center'
                  }}
              >
                  <Icon name={props.iconName} size={30} />
                  <Text style={styles.optionTitle}>{props.title}</Text>
              </View>
  )

}

const  Explore = () => 
{
  const popularVideos = useSelector(state => state.popularVideos)

  return (
        <View>       
          <Header />
          <ScrollView>
              <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'center', borderBottomWidth: 0.8}}>
                <LittleCard title="Trending" color="red" iconName="trending-up" />
                <LittleCard title="Music" color="green" iconName="queue-music"/>
                <LittleCard title="Gaming" color="pink" iconName="videogame-asset"/>
                <LittleCard title="News" color="blue" iconName="announcement"/>
                
              </View>
             
              <View style={{height: 60, marginHorizontal: 20, justifyContent: 'center'}}>
                <Text style={{fontSize: 20}}>Trending Videos</Text>
              </View>
              <FlatList
                  data={popularVideos}
                  renderItem={({item}) => {
                    return <VideoItem
                              videoId={item.id}
                              title={item.snippet.title}
                              channel={item.snippet.channelTitle}
                            />
                  }}
                  keyExtractor={item => item.id}
               />

           </ScrollView>
      </View> 
     )
}

const styles = StyleSheet.create({
   option: {
    
     borderRadius: 10,
     margin: 10,
     justifyContent: 'space-around',
     width:150,
     flexDirection: 'row'
   },
   optionTitle: {
     fontSize: 20,
     padding: 10,
     justifyContent: 'center',
     textAlign:'center'
   }
})

export default Explore  