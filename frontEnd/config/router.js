import React from 'react';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import compShelterMain from "../components/screens/shelterMain";
import compShelterList from "../components/screens/shelterList";
import compShelterLove from "../components/screens/shelterLove";
import compShelterReservations from "../components/screens/shelterReservations";

export const AppStackNavigator = createStackNavigator(
    {
        Home: compShelterMain,
        List: compShelterList,
        Love: compShelterLove,
        Reservations: compShelterReservations
    },
    {
        initialRouteName: 'Home',
    }
);
