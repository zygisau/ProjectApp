/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react';
export * from './components/common/loading';
/*
class App2 extends Component {
    render() {
        return <AppStackNavigator />;
    }
}

export default App2;*/

AppRegistry.registerComponent(appName, () => App);
