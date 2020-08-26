import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
import { useSelector, useDispatch } from 'react-redux'


const  Account = ({navigation}) => 
{
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch({type: 'sign_in_success', payload: userInfo})  
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch({type:'sign_out_success'}) // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email' /* Add any other scopes here */],
      webClientId: 'Enter your webClientId here.',
    })
  },[])

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Icon
                name="close" 
                size={35}
                onPress={() =>navigation.goBack()}
            />
            <Text style={styles.title}>Account</Text>
        </View>
        
        <ScrollView contentContainerStyle={styles.body}>
              <View style={{alignItems:'center', marginBottom:40,marginTop: 130}}>
                    
                    <Icon name="account-circle" size={150} color="grey" /> 
               
                    <Text style={{fontSize:15, marginVertical:20, width:260,textAlign:'center'}}>
                      {
                        currentUser ? <Text style={{fontSize:15, marginVertical:20, width:260,textAlign:'center'}}>
                                         Click the button below to use YouTube signed out. 
                                      </Text>
                                    : <Text style={{fontSize:15, marginVertical:20, width:260,textAlign:'center'}}>
                                         Sign in now to upload, save, comment on videos
                                      </Text>
                      }
                    </Text> 
                    {
                      currentUser
                      ? <Button 
                          onPress={() => signOut()}
                          title="Sign Out"
                          color="blue"
                       />
                      :  <Button
                          onPress={() => signIn()}
                          title="Sign In"
                          color="blue"
                        />                   
                    }
              </View>
              <View style={{ borderTopWidth:0.5}}>
                    <View style={{flexDirection:'row', alignItems: 'center',margin:10}}>
                      <Icon name="settings" size={35} />
                      <Text style={{fontSize:20,marginLeft:10}}>Settings</Text>  
                    </View>  
                    <View style={{flexDirection:'row',  alignItems: 'center',margin:10}}>
                        <Icon name="help" size={35} />
                        <Text style={{fontSize:20,marginLeft:10}}>Help and feedback </Text>  
                    </View>
              </View>                
        </ScrollView>  
        <View style={styles.footer}>
              <Text style={{fontSize:17}}>Privacy Policy</Text>
                <Text style={{fontSize:17}}> · </Text>
              <Text style={{fontSize:17}}>Terms of Conditions</Text>
        </View>        
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection:'column'
  },
  header: {
      flexDirection: 'row',
      elevation: 4,
      backgroundColor:'white',
      alignItems:'center',
      padding: 15
  },
  title: {
    fontSize: 25,
    marginHorizontal: 15
  },
  body: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
  },
  footer:{
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})
export default Account
