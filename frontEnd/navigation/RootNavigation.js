import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import createMaterialTopTabNavigator from "./TabNavigation.js";

const RootStack = createStackNavigator({
    Main: {
        screen: createMaterialTopTabNavigator,
    },
});

const Navig = createAppContainer(RootStack);
export default Navig;