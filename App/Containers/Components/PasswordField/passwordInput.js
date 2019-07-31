import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native'
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'eye-off',
            password: true,
        }
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'eye',
                password: false
            }
        } else {
            newState = {
                icEye: 'eye-off',
                password: true
            }
        }

        // set new state value
        this.setState(newState)

    };

    render() {
        return (
            <View>
                <TextInput {...this.props} placeholder={this.props.placeHolderText} placeholderTextColor="#757575" secureTextEntry={this.state.password} maxLength={25} autoCapitalize={'none'} autoCorrect={false}>
                </TextInput>
                <TouchableOpacity style={styles.icon} hitSlop={{top: 20, bottom: 20, left: 20, right: 50}} onPress={this.changePwdType}>
                <Feather  name={this.state.icEye} size={this.props.iconSize} color={'#C11D1D'}/>
                </TouchableOpacity>
                {/* <Icon style={styles.icon}
                      name={this.state.icEye}
                      size={this.props.iconSize}
                      color={'#FC3838'}
                      onPress={this.changePwdType}
                /> */}
            </View>
        );
    }
}


export const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    }

});

PasswordInputText.defaultProps = {
iconSize:20,
placeHolderText : 'Password'
}

