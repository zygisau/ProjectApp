import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground, AppRegistry} from 'react-native';
import {AppStackNavigator} from "./config/router";
//import {SignUpNav} from "/components/screens/compSignUp";

export default class App extends React.Component {
    render() {
        return <AppStackNavigator />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        color: '#000000',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});