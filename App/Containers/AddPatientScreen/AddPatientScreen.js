import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, TextInput, Image, Picker} from 'react-native';
import {withNavigation} from 'react-navigation'

class AddPatientScreen extends Component {
    constructor(props){
        super(props);
        this.GenderData = ["Male","Female"];
    }
      GenderList = () =>{
        return( this.GenderData.map( (x,i) => { 
              return( <Picker.Item label={x} key={i} value={x}  />)} ));
    }
    render(){
        return(
            <View style={{backgroundColor:'#2D295C', flex:1}}>
                <ScrollView>
                    <View style={{marginTop:50}}>
                        <Text style={{color:'#fff', fontSize:25, textAlign:'center'}}>Add Patient</Text>
                    </View>
                    <View style={{marginLeft:20, marginRight:20}} >
                <TextInput
                style={{color:'#fff'}}
                placeholder='Name'
                placeholderTextColor='#fff'
                underlineColorAndroid='#fff'
        onChangeText={(name) => this.props.setName(name)}
        value={this.props.state.name}
      />
                </View>
                <View style={{marginLeft:20, marginRight:20}} >
                <TextInput
                style={{color:'#fff'}}
                placeholder='Contact'
                placeholderTextColor='#fff'
                underlineColorAndroid='#fff'
        onChangeText={(contact) => this.props.setContact(contact)}
        value={this.props.state.contact}
      />
                </View>
                <View style={{marginLeft:20, marginRight:20}} >
                <TextInput
                style={{color:'#fff'}}
                placeholder='Disease'
                placeholderTextColor='#fff'
                underlineColorAndroid='#fff'
        onChangeText={(disease) => this.props.setDisease(disease)}
        value={this.props.state.disease}
      />
                </View>
                <View style={{marginLeft:20, marginRight:20}} >
                <TextInput
                style={{color:'#fff'}}
                placeholder='Treatment'
                placeholderTextColor='#fff'
                underlineColorAndroid='#fff'
        onChangeText={(treatment) => this.props.setTreatment(treatment)}
        value={this.props.state.treatment}
      />
                </View>
                <View style={{marginRight:20, marginLeft:20,}}>
                    
                <Picker style={{color:'white'}}
                  
                    selectedValue={this.props.state.selectedGender}
                    onValueChange={ (value) => ( this.props.setSelectedGender(value) )}>
                    { this.GenderList() }
                </Picker>
                </View>
                <View style={{marginLeft:20, marginRight:20}} >
                <TextInput
                style={{color:'#fff'}}
                placeholder='Docid'
                placeholderTextColor='#fff'
                underlineColorAndroid='#fff'
        onChangeText={(docid) => this.props.setDocid(docid)}
        value={this.props.state.docid}
      />
                </View>
                <TouchableOpacity onPress={() => this.props.addPatient()}  style={{height:30, width:100, borderRadius:10, borderWidth:2, borderColor:'#fff', alignSelf:'center', marginTop:30}}>
                <Text style={{color:"#fff", fontSize:15, textAlign:'center', marginTop:2}}>ADD</Text>
            </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
export default withNavigation(AddPatientScreen);