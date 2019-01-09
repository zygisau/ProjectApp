import React from 'react';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import CompLoginScreen from "../components/screens/compLogin";
import CompHomeScreen from "../components/screens/compLoginHome";
import CompSignUpScreen from "../components/screens/compSignUp";
//import LoggedIn from "../components/screens/logged";
import Home from "../components/screens/Home";
import Profile from "../components/screens/homecomponents/compProfile";
import PetList from "../components/screens/homecomponents/compList";
import PetProfile from "../components/screens/homecomponents/compPetProfile";
//import createMaterialTopTabNavigator from "../components/navigation/TabNavigation.js";

import compShelterMain from "../components/screens/shelterMain";
import compShelterList from "../components/screens/shelterList";
import compShelterLove from "../components/screens/shelterLove";
import compShelterReservations from "../components/screens/shelterReservations";
import compShelterAdd from"../components/screens/shelterAdd";
import compPetScreen from "../components/screens/shelterPetScreen";
import compShelterEdit from"../components/screens/shelterEdit";


export const AppStackNavigator = createStackNavigator(
    {
        Home: CompHomeScreen,
        Login: CompLoginScreen,
        SignUp: CompSignUpScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export const MainStackNavigator = createStackNavigator(
    {
        Main: Home,
        Profile: Profile,
        List: PetList,
        PetProfile: PetProfile
    },
    {
        initialRouteName: 'Main',
    }
);

export const AppStackNavigatorShelter = createStackNavigator(
    {
        Home: compShelterMain,
        List: compShelterList,
        Love: compShelterLove,
        Reservations: compShelterReservations,
        Add:compShelterAdd,
        Edit:compShelterEdit,
        Pet:compPetScreen,
    },
    {
        initialRouteName: 'Home',
    }
);
