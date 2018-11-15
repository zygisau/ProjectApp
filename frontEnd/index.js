/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react';
/*
class App2 extends Component {
    render() {
        return <AppStackNavigator />;
    }
}

export default App2;*/

AppRegistry.registerComponent(appName, () => App);
