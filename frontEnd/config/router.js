import React from 'react';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import CompLoginScreen from "../components/screens/compLogin";
import CompHomeScreen from "../components/screens/compLoginHome";
import CompSignUpScreen from "../components/screens/compSignUp";
import LoggedIn from "../components/screens/logged";
//import Home from "../components/screens/Home";
//import createMaterialTopTabNavigator from "../components/navigation/TabNavigation.js";


export const AppStackNavigator = createStackNavigator(
    {
        //Main: createMaterialTopTabNavigator,
        Home: CompHomeScreen,
        Login: CompLoginScreen,
        SignUp: CompSignUpScreen,
        Logged: LoggedIn,
    },
    {
        initialRouteName: 'Home',
    }
);