import React, {useEffect, useState} from 'react'
import VideoItem from '../components/video_item'
import Header from '../components/header'
import { useSelector, useDispatch } from 'react-redux'
import { View, FlatList, ActivityIndicator} from 'react-native'

const  Home = () => 
{
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const popularVideos = useSelector(state => state.popularVideos)

  const fetchPopularVideos = () => {
    setLoading(true)
    /* Add your API key in the following endpoint. */
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=YOUR_API_KEY_HERE`)
    .then(res => res.json())
    .then(data => {
        setLoading(false)
        dispatch({type: 'add_popular_videos', payload: data.items})
    })
  }
  useEffect(() => {
    fetchPopularVideos()
  },[])

  return (
         <View>
            <Header />
            {loading ? <ActivityIndicator style={{marginTop: 40}} size="large" color="grey" /> : null}    
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
        </View> 
  )
} 
export default Home
