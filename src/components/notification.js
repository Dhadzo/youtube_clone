import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const  Notification = (props) => {
    
   return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image source={'profile image of video owner from props'} style={{height: 35, width: 35, borderRadius: 30}} />
                    <Text style={styles.title}>
                        Put title of notification here
                    </Text>    
                    <Image source={'video image from props'} style={{height:50, width: 70}} />
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
        marginVertical: 30,
        justifyContent: 'space-between'
       
    },
    title: {
        width: 200,
        marginHorizontal: 10,
        fontSize: 15
    }
})

export default Notification