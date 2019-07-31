import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, TextInput, Image} from 'react-native';
import {withNavigation} from 'react-navigation'

class SignupScreen extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#2D295C', flex:1}}>
                <ScrollView>
                      <View style={{marginTop:20}}>
                          <Text style={{color:'#fff', fontSize:25, textAlign:'center', marginTop:30, marginBottom:20}}>Sign Up</Text>
                          <Text style={{color:'#fff', fontSize:15, textAlign:'center'}}>Lets create an account</Text>
                      </View>
                      <View style={{marginTop:30}}>
                      <View style={{height: 40, borderColor: '#fff', borderWidth: 2, borderRadius:10, marginLeft:20, marginRight:20, marginBottom:15}}>
                <TextInput
                style={{color:'#fff'}}
                placeholder='Username'
                placeholderTextColor='#fff'
        onChangeText={(Username) => this.props.setUsername(Username)}
        value={this.props.state.Username}
      />
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
              </View>
              <View>
              <TouchableOpacity  onPress={() => this.props.signup()}  style={{height:30, width:100, borderRadius:10, borderWidth:2, borderColor:'#fff', alignSelf:'center', marginTop:20}}>
                  <Text style={{color:"#fff", fontSize:15, textAlign:'center'}}>Sign Up</Text>
              </TouchableOpacity>
              </View>
              <TouchableOpacity   style={{alignSelf:'flex-end', marginTop:60, marginRight:20,height:30, width:100, borderRadius:10, borderWidth:2, borderColor:'#fff'}} onPress={() => this.props.navigation.navigate('LoginScreenLogics')}>
                      <Text style={{color:'#fff', fontSize:17, textAlign:'center'}}>Login</Text>
                  </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
export default withNavigation(SignupScreen);