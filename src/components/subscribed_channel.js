import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const  SubscribedChannel = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={'image of the subscribed channel from props'} style={{height: 60, width: 60, borderRadius: 30}} />
                <Text> 
                   {/*
                      Insert name of the subscribed channel here from props
                   */}    
                 </Text>       
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    }
})

export default SubscribedChannel