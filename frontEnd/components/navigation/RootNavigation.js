import React from "react";
import {createStackNavigator} from "react-navigation";
//import {createAppContainer} from "react-navigation";
import createMaterialTopTabNavigator from "./TabNavigation.js";

export const Navig = createStackNavigator({
    Main: {
        screen: createMaterialTopTabNavigator,
    },
});

//const Navig = createAppContainer(RootStack);
//export default Navig;