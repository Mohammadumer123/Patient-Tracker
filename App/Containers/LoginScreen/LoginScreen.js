import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, TextInput, Image} from 'react-native';
import {withNavigation} from 'react-navigation'
// import { Dropdown } from 'react-native-material-dropdown';
class LoginScreen extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#2D295C', flex:1}}>
                <ScrollView>
                <View style={{alignSelf:'center', marginTop:20, }}>
                 <Image style={{height:150, width:150}}
                 resizeMode="contain"
                  source={require('../../Images/logo.png')}>
                 </Image>
                </View>
                <View style={{alignSelf:"center", marginTop:50, marginBottom:20}}>
                    <Text style={{color:'#fff', fontSize:25}}>Login</Text>
                </View>
                <View style={{height: 40, borderColor: '#fff', borderWidth: 2, borderRadius:10, marginLeft:20, marginRight:20, marginBottom:15}}>
                <TextInput
                style={{color:'#fff'}}
                placeholder='email'
                placeholderTextColor='#fff'
        onChangeText={(email) => this.props.setEmail(email)}
        value={this.props.state.email}
      />
                </View>
                <View style={{height: 40, borderColor: '#fff', borderWidth: 2, borderRadius:10, marginLeft:20, marginRight:20}}>
                <TextInput
                style={{color:'#fff'}}
                placeholder='Password'
                placeholderTextColor='#fff'
                secureTextEntry={true}
                  value={this.props.state.password}
                  onChangeText={(password) => this.props.setPassword(password)}
                />
              </View>
              <TouchableOpacity    onPress={() => this.props.dologin()}   style={{height:30, width:100, borderRadius:10, borderWidth:2, borderColor:'#fff', alignSelf:'center', marginTop:20}}>
                  <Text style={{color:"#fff", fontSize:15, textAlign:'center'}}>Sign In</Text>
              </TouchableOpacity>
              <View style={{alignSelf:"center", flexDirection:'row', marginTop:100}}>
                  <Text style={{color:'#fff'}}>Already have a account?</Text>
                  <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignupScreenLogics')}>
                      <Text style={{color:'#fff'}}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
        
                </ScrollView>
            </View>     
        )
    }
}
export default withNavigation(LoginScreen);