import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { Fonts } from "./utils/fonts";
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import compLoginScreen from './components/screens/compLogin';
import compSignUpScreen from  "./components/screens/compSignUp";
import compLoginHomeScreen from "./components/screens/compLoginHome";

type Props = {};
export default class App extends Component<Props> {
//export default class App extends React.Component {
    render() {
        return <AppStackNavigator />
    }
}

const AppStackNavigator = createStackNavigator(
    {
        //LoginHome: compLoginHomeScreen,
        Login: compLoginHomeScreen
    },
    {
        initialRouteName: 'Login',
    }
);

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