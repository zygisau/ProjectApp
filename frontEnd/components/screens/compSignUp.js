import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';
import { Fonts } from "../../utils/fonts";
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class compSignUpScreen extends Component {

    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.function = this.function.bind(this);
    }
    function() {

    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
                <View style={styles.logIn}>
                <Text style={styles.logInText}>SIGN UP</Text>
                </View>
                <View style={styles.logInputs}>
                    <FormInput onChangeText={this.function()} inputStyle={styles.border}>   E-MAIL</FormInput>

                    <FormInput onChangeText={this.function()} inputStyle={styles.border}>   PASSWORD</FormInput>

                    <FormInput onChangeText={this.function()} inputStyle={styles.border}>   CONFIRM PASSWORD</FormInput>
                </View>
                    <View style={styles.bottom}>
                        <Button
                            buttonStyle={styles.buttonLog}
                            title='SIGN UP'
                            textStyle={styles.btText}
                        />
                    </View>
            </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}
/*
export default createStackNavigator({
    Login: compLoginScreen
});
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    //
    logInputs: {
        //backgroundColor: '#686769',
        //justifyContent: 'flex-end',
        flexDirection: 'column',
        flex: 0.3,
        textAlign: 'left',
        justifyContent: 'space-around',
    },
    logIn: {
        justifyContent: 'flex-end',
        //flexDirection: 'column',
        bottom: '5%',
        flex: 0.4,
        textAlign: 'left',
        left: 30,
    },
    logInText: {
        fontSize: 50,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: Fonts.FranklinGothic,
    },
    //
    bottom: {
        flex: 0.25,
        flexDirection: 'column',

        alignItems: 'stretch',
        top: '5%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    buttonLog: {
        height: 55,

        backgroundColor: '#2e2f2e',
        borderRadius:100,
        //top: '30%',
    },
    btText: {
        letterSpacing: 5,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: Fonts.FranklinGothic,
    },
    border: {
        height: 55,
        justifyContent: 'center',
        backgroundColor:'#2e2f2e',
        borderRadius: 20,

    }
});