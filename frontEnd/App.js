import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground, AppRegistry} from 'react-native';
import {AppStackNavigator} from "./config/router";
//import { Loading } from './components/common/loading';
import LoggedIn from './components/screens/logged';
import deviceStorage from "./components/services/deviceStorage";
//import {SignUpNav} from "/components/screens/compSignUp";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            jwt: '',
            loading: true
        };
        //this.newJWT = this.newJWT.bind(this);
        //this.deleteJWT = deviceStorage.deleteJWT.bind(this);
        this.loadJWT = deviceStorage.loadJWT.bind(this);
        this.loadJWT();
    }

    render() {
        if (!this.state.jwt) {
            return (
                <AppStackNavigator/>
            );
        } else if (this.state.jwt) {
            return (
                <LoggedIn/>
            );
        }
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

export const newJWT = (jwt)=>{
    this.setState({
        jwt: jwt
    });
};