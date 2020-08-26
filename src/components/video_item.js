import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'


const  VideoItem = ({videoId,title,channel}) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <TouchableOpacity
            onPress={() =>{
            navigation.navigate("video-player",{videoId:videoId})
            dispatch({type: 'add_recently_watched', payload: {videoId: videoId,title: title}})
            }}
        >
        <View style={styles.container}>
            <Image source={{uri:`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}} style={{height:200, width: 350}} />
            <View style={styles.descriptionContainer}>
                <Icon  style={styles.navItem} name="account-circle" size={45} color="grey" />
                <View style={styles.VideoDetails}>
                <Text style={styles.videoTitle}>
                    {title}  
                    </Text>    
                    <Text style={styles.videoStats}>
                        {channel}
                    </Text>
                    
                </View>
                <TouchableOpacity>
                <Icon name='more-vert' size={30} />
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        borderBottomWidth: 0.5
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10,

    },
    VideoDetails: {
        marginLeft: 10
    },
    videoTitle:  {
        fontSize: 20,
        color: 'black'
    },
    videoStats: {
        fontSize: 14,
        color: '#3c3c3c'
    }  
})
export default VideoItem