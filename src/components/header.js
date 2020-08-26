import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'


const  Header = () => 
{
  const currentUser = useSelector(state => state.currentUser)
  const navigation = useNavigation()
  return (
     <View>
        <View style={styles.navBar}>
           <Image source={require('../images/youtube_logo.png')} style={{height:40, width: 150}} />
           <View style={styles.rightNav} >
             <Icon
                style={styles.navItem}
                name="search"
                size={30}
                onPress={() => navigation.navigate('search')}
             />
             {
               currentUser 
               ?
               <TouchableOpacity
                 onPress ={() => navigation.navigate('account')}
               >
                  <Image
                      source={{uri:currentUser.user.photo}}  
                      style={{marginHorizontal:10,height: 30, width: 30, borderRadius: 20 }} 
                  />
               </TouchableOpacity>
               :
               <Icon 
                  style={styles.navItem} 
                  name="account-circle" 
                  size={30}
                  onPress={() => navigation.navigate('account')} 
               />
             }
           </View>
        </View>
     </View>
  )
}
const styles = StyleSheet.create({

    navBar: {
      height: 55,
      elevation: 3,
      flexDirection: 'row',
      paddingHorizontal:  10,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white'
    },
    rightNav: {
       flexDirection: 'row'
    },
    navItem: {
      paddingHorizontal: 14
    }
  })
export default Header
