import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';
import { Fonts } from "../../utils/fonts";
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { AppStackNavigator } from  "../../config/router";
import compHomeScreen from "./compLoginHome";
import compSignUpScreen from "./compSignUp";


class Login extends React.Component {

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
                        <Text style={styles.logInText}>LOG IN</Text>
                    </View>
                    <View style={styles.logInputs}>
                        <FormInput onChangeText={this.function()} inputStyle={styles.border}>   E-MAIL</FormInput>

                        <FormInput onChangeText={this.function()} inputStyle={styles.border}>   PASSWORD</FormInput>

                    </View>
                    <View style={styles.bottom}>
                        <Button
                            buttonStyle={styles.buttonLog}
                            title='LOG IN'
                            textStyle={styles.btText}
                        />
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}
export default Login;
/*export const LoginNav= createStackNavigator(
    {
        Login: Login
    },
);*/
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
        justifyContent: 'space-around',
        flexDirection: 'column',
        flex: 0.2,
        textAlign: 'left',
        //left: 30,
    },
    logIn: {
        justifyContent: 'flex-end',
        //flexDirection: 'column',
        flex: 0.3,
        textAlign: 'left',
        left: 30,
        bottom: '5%',
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
        //justifyContent: 'space-around',
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
