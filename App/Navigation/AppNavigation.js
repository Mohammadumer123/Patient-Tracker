import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation'
import LoginScreenLogics from "../Containers/LoginScreen/LoginScreenLogics"
import AddPatientScreenLogics from '../Containers/AddPatientScreen/AddPatientScreenLogics'
import SignupScreenLogics from '../Containers/SignupScreen/SignupScreenLogics'   

const PrimaryNav = createStackNavigator({

    LoginScreenLogics: {
    screen: LoginScreenLogics,
    navigationOptions: ({ navigation }) => ({
        header: null
      })
},
SignupScreenLogics: {
    screen: SignupScreenLogics,
    navigationOptions: ({ navigation }) => ({
        header: null
      })
},
AddPatientScreenLogics: {
    screen: AddPatientScreenLogics,
    navigationOptions: ({ navigation }) => ({
        header: null
      })
}

},

{
    // Default config for all screens
    //headerMode: 'none',
    initialRouteName: 'AddPatientScreenLogics',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0
      }
    }
  }

)
export default createAppContainer(PrimaryNav)


