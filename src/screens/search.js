import React, { useState } from 'react'
import SearchResultVideo from '../components/search_result_video'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet,FlatList, View, ActivityIndicator, TextInput } from 'react-native'
import { HeaderBackButton } from '@react-navigation/stack'


const  Search = ({navigation}) => 
{
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const searchResult = useSelector(state => state.searchResult)
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    const fetchSearchResult = () => {
        setLoading(true)
        /* Insert your api key in the following endpoint */
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=YOUR_API_KEY_HERE`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            dispatch({type: 'add', payload: data.items})

        })
    }
  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <HeaderBackButton 
                  onPress={() =>navigation.goBack()}
              />
                <TextInput
                    style={styles.search}
                    autoFocus={true}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    placeholder="Search YouTube"
                    returnKeyType= "search" 
                    autoCorrect={false}
                    onSubmitEditing={() => fetchSearchResult()}
                    
                />
                
          </View>
          {loading ? <ActivityIndicator style={{marginTop: 20}} size="large" color="red" /> : null}    
          <FlatList
              data={searchResult}
              renderItem={({item}) =>{
                  return <SearchResultVideo 
                       videoId={item.id.videoId}
                       title={item.snippet.title}
                       channel={item.snippet.channelTitle}
                    />
              } }
              keyExtractor={item=>item.id.videoId}
          /> 
      </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        elevation: 4,
        backgroundColor:'white',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 5

    },
    search: {
        fontSize: 20,
        width: '90%'
    } 
})


export default Search
