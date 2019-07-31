import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import LoginScreen from '../LoginScreen/LoginScreen'

class LoginScreenLogics extends Component{
    
saveUserId = async userId => {
    console.log('user id is this : ',userId)
    try {
      await AsyncStorage.setItem('id', userId);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };
    constructor(props) {
        super(props);
        this.state = { email: '', password:'' }
        ;
      }
      setEmail = (email) => {
        this.setState({ email: email })
        console.log('email was set to : ', email)
    }
      setPassword = (password) => {
          this.setState({password : password})
          console.log('password')
      }

    dologin = (email, password) => {
      
        email = this.state.email
        password = this.state.password;


      var details = {
         email: email,
         password: password,

     };
    
     
       fetch('https://patient-tracker-server.herokuapp.com/user/signin', {
            method: 'POST',
            body:JSON.stringify({email:this.state.email,password:this.state.password})
        }).then(res => res.json()).then((response)=>{
            console.log(response)
            if (response.user) {
                this.saveUserId(response.user._id)
                    }
        })
    } 
    render(){ 
        
        return( 
            <LoginScreen state={this.state} dologin={this.dologin} setEmail={this.setEmail} setPassword={this.setPassword}></LoginScreen>
        )
    }

}
export default LoginScreenLogics;

