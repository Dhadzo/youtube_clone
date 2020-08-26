import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'



const  SearchResultVideo = ({videoId,title,channel}) => {

    return (
        <View style={styles.container}>
              <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image source={{uri:`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}} style={{height:130, width: 190}} />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.title} numberOfLines={3}>
                            {title}
                        </Text>
                        <Text style={styles.name} numberOfLines={2}>
                             {channel}
                        </Text>
                    </View>
                       
              </TouchableOpacity>
              <TouchableOpacity>
                  <Icon name="more-vert" size={30} />
              </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'space-between'
       
    },
    title: {
        width: 130,
        marginHorizontal: 10,
        fontSize: 22
    },
    name: {
        width: 150,
        marginHorizontal: 10,
        fontSize: 16
    }
})

export default SearchResultVideo