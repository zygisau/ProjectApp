import React from "react";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { createMaterialTopTabNavigator } from "react-navigation";

export default createMaterialTopTabNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile",
            },
        },
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "Home",
            },
        },
    },
    {
        navigationOptions: {
            header: null,
        },
        tabBarPosition: "top",
        initialRouteName: "Home",
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            style: {
                height: 75,
            },
        },
    }
);