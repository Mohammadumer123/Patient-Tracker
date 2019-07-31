import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import SignupScreen from '../SignupScreen/SignupScreen'


class SignupScreenLogics extends Component{
    constructor(props) {
        super(props);
        this.state = { Username: '',email:'', password:'' }
        ;
      }
      setUsername = (Username) => {
        this.setState({ Username: Username })
        console.log('username: ', Username)
    }
    setEmail = (email) => {
        this.setState({ email: email })
        console.log('email was set to : ', email)
    }
    setPassword = (password) => {
        this.setState({password : password})
        console.log('password')
    }
  signup = (username, email, password) => {

       var details = {
        name: this.state.Username,   
        email: this.state.email,
        password: this.state.password,

    };
    console.log(details)
    
    fetch('https://patient-tracker-server.herokuapp.com/user/signup', {
        method: 'POST',
        body:JSON.stringify(details),
        headers:{"Content-Type":"application/json"}
    }).then(res => res.json()).then((response)=>{
        console.log(response)

    } ).catch((err)=> {
       console.log(err,"err")
    })
         
  } 

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', '5d3990d3608e1b002069518a')
    } catch (e) {
      // saving error
    }
  }

    render(){
        return(
            <SignupScreen signup={this.signup} state={this.state} setEmail={this.setEmail} setPassword={this.setPassword} setUsername={this.setUsername}></SignupScreen>
        )
    }

}
export default  SignupScreenLogics;

