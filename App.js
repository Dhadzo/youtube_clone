import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootHome from './src/components/root_home'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { reducer } from './src/reducers/reducer'
import SplashScreen from 'react-native-splash-screen'



const store = createStore(reducer)


export default class  App extends React.Component  
 {
   componentDidMount(){
     SplashScreen.hide()
   }
  render(){

  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootHome />
        </NavigationContainer>
    </Provider>
      )
}
}
