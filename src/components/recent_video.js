import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const  RecentVideo = (props) => {

    return (
        <View style={styles.container}>
              <TouchableOpacity style={{flexDirection:"row"}}>
                 <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}} style={{height: 100, width: 160}} />
              </TouchableOpacity>
              <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <Text style={styles.title}>
                            {props.title}  
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={30} />
                    </TouchableOpacity>
              </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 30
       
    },
    title: {
        width: 140,
        fontSize: 15
    }
})

export default RecentVideo