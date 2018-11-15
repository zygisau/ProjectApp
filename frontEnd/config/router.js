import React from 'react';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Login from "../components/screens/compLogin";
import compHomeScreen from "../components/screens/compLoginHome";
import compSignUpScreen from "../components/screens/compSignUp";
//import {LoginNav} from "../components/screens/compLogin";
//import {HomeNav} from "../components/screens/compLoginHome";
//import {SignUpNav} from "../components/screens/compSignUp";

export const AppStackNavigator = createStackNavigator(
    {
        Home: compHomeScreen,
        //Login: Login,
        SignUp: compSignUpScreen,
    },
    {
        initialRouteName: 'Home',
    }
);