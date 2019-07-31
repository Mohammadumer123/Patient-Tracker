import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import AddPatientScreen from '../AddPatientScreen/AddPatientScreen'


class AddPatientScreenLogics extends Component{
     getUserId = async () => {
        let userId = '';
        try {
          userId = await AsyncStorage.getItem('id') || 'none';
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
        return userId;
      }
    constructor(props) {
        super(props);
        this.state = { name: '', contact:'', disease:'', treatment:'' ,selectedGender : null, docid:'id'}
        ;
      }
      setName = (name) => {
        this.setState({ name: name })
        console.log('name : ', name)
    } 
    setContact = (contact) => {
        this.setState({ contact: contact })
        console.log('1234 : ', contact)
    }
    setDisease = (disease) => {
        this.setState({disease: disease})
        console.log('disease :', disease)
    }
    setTreatment= (treatment) => {
        this.setState({treatment: treatment})
        console.log('treatment :', treatment)
    }
    setSelectedGender= (selectedGender) => {
        this.setState({selectedGender: selectedGender})
        console.log('Gender :', selectedGender)
    }
    setDocid = (docid) => {
        this.setState({docid: docid})
        console.log('docid :', docid)
    }
    addPatient = (name, contact, disease, treatment, selectedGender, docid) => {
        var details = {
            name: this.state.name,
            contact: this.state.contact,
            disease: this.state.disease,
            treatment: this.state.treatment,
            selectedGender: this.state.selectedGender,
            docid: this.state.docid,
        };
        console.log(details)
        fetch('https://patient-tracker-server.herokuapp.com/patient/add', {
            method: 'POST',
            body:JSON.stringify(details),
            headers:{"Content-Type":"application/json"}
        }).then(res => res.json()).then((response)=>{
            console.log(response)
    
        } ).catch((err)=> {
           console.log(err,"err")
        })

    }
    render(){
        return(
            <AddPatientScreen addPatient={this.addPatient} setDocid={this.setDocid} setSelectedGender={this.setSelectedGender} setTreatment={this.setTreatment} setDisease={this.setDisease} setContact={this.setContact} setName={this.setName} state={this.state}></AddPatientScreen>
        )
    }

}
export default AddPatientScreenLogics;

