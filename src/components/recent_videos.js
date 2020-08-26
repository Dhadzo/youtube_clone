import React from 'react'
import RecentVideo from './recent_video'
import { StyleSheet, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

const  RecentVideos = () => 
{
    const recentlyWatched = useSelector(state => state.recentlyWatched)
    
  return (
      <View style={styles.container}>
            <FlatList
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                data={recentlyWatched}
                renderItem = {({item}) => {
                    return <RecentVideo 
                       videoId = {item.videoId}
                       title={item.title}
                    />
                }}
            />
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
    }
})

export default RecentVideos