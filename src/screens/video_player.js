import React from 'react'
import { WebView } from 'react-native-webview'
import { View, Text, Dimensions } from 'react-native'

const VideoPlayer = ({route}) => {
    return (
      <View
         style={{flex:1}}
      >
           <View style={{width: "100%", height: 200}}>
              <WebView
                 mediaPlaybackRequiresUserAction={true}
                 source={{uri: `https://www.youtube.com/embed/${route.params.videoId}`}} 
              />
           </View>
           <Text numberOfLines={2} style={{fontSize:20, width:Dimensions.get("screen").width -50, margin:9}}>
                
           </Text>
           <View style={{borderBottomWidth:1}} />
      </View>
    )
}

export default VideoPlayer