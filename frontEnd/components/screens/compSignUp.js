import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView} from 'react-native';
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
            <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
                <View style={styles.logIn}>
                <Text style={styles.logInText}>LOG IN</Text>
                </View>
                <View style={styles.logInputs}>
                <FormLabel>E-MAIL</FormLabel>
                    <FormInput onChangeText={this.function()}/>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>

                <FormLabel>PASSWORD</FormLabel>
                    <FormInput onChangeText={this.function()}/>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>

                <FormLabel>CONFIRM PASSWORD</FormLabel>
                    <FormInput onChangeText={this.function()}/>
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                    <View style={styles.bottom}>
                        <Button
                            buttonStyle={styles.buttonLog}
                            title='LOG IN'
                            textStyle={styles.btText}
                        />
                    </View>
        </ImageBackground>
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
        justifyContent: 'flex-end',
        flexDirection: 'column',
        flex: 0.5,
        textAlign: 'left',
        //left: 30,
    },
    logIn: {
        justifyContent: 'flex-end',
        //flexDirection: 'column',
        flex: 0.3,
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
});