import React from 'react';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import compLoginScreen from "../components/screens/compLogin";
import compHomeScreen from "../components/screens/compLoginHome";
import compSignUpScreen from "../components/screens/compSignUp";

export const AppStackNavigator = createStackNavigator(
    {
        Home: compHomeScreen,
        Login: compLoginScreen,
        SignUp: compSignUpScreen,
    },
    {
        initialRouteName: 'Home',
    }
);