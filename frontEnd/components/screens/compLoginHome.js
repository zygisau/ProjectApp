import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground, AppRegistry} from 'react-native';
import {Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";

class CompHomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
                <View style={styles.top}>
                    <Image style={styles.logo} source={require('../../assets/logos/logo.png')}/>
                </View>
                <View style={styles.middle}>
                    <Button
                        buttonStyle={styles.buttonFacebook}
                        title='CONTINUE WITH FACEBOOK'
                        textStyle={styles.btText}/>
                    <Button
                        buttonStyle={styles.buttonGoogle}
                        title='CONTINUE WITH GOOGLE'
                        textStyle={styles.btText}/>
                    <Button
                        buttonStyle={styles.buttonSign}
                        title='SIGN UP'
                        textStyle={styles.btText}
                        onPress={() => this.props.navigation.navigate("SignUp")}/>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.already}>Already a user?</Text>
                    <Button
                        buttonStyle={styles.buttonLog}
                        title='LOG IN'
                        textStyle={styles.btText}
                        onPress={() => this.props.navigation.navigate("Login")}/>
                </View>
                <View style={styles.language}>
                    <Button
                        onPress={() => {
                            //Alert.alert('You tapped the button!');
                            console.log('change language button has been pressed');
                        }}
                        buttonStyle={styles.buttonLanguage}
                        title='CHANGE LANGUAGE'
                        //clear='true'
                        textStyle={styles.btText}/>
                </View>

            </ImageBackground>
        );
    }
}

export default CompHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    top: {
        //backgroundColor: '#f5fcff',
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        //top: '10%',
        //resizeMode: 'cover',
    },
    logo: {
        width: 230,
        height: 214,
        flexDirection: 'row',
        alignItems: 'center',
    },
    middle: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        //top: '25%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    already: {
        //position: 'absolute',
        //width: '100%',
        height: 40,
        //top: '73%',
        textAlign: 'center',
        color: '#000000',
        padding: 0,
        margin: 0,
        //fontWeight: 'bold',
        fontSize: 20,
        fontFamily: Fonts.FranklinGothic,
    },
    btText: {
        letterSpacing: 5,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: Fonts.FranklinGothic,
    },
    buttonFacebook: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 100,
    },
    buttonGoogle: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#db4437',
        borderRadius: 100,
    },
    buttonSign: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6a9500',
        borderRadius: 100,
    },
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
        borderRadius: 100,
        //top: '30%',
    },
    language: {
        flex: 0.15,
        flexDirection: 'column',
        //justifyContent: 'space-around',
        alignItems: 'flex-end',
        top: '5%',
        right: 0,
        //width: '80%',
        //height: '100%',
        resizeMode: 'cover',
    },
    buttonLanguage: {
        height: 55,
        backgroundColor: '#2e2f2e',
        borderRadius: 100,
    }

});