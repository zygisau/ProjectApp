/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react';

AppRegistry.registerComponent(appName, () => App);
//
// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     Navigator,
//     StyleSheet
// } from 'react-native';
// // import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// //import React, { Component} from 'react';
//
// class AdoptMe extends Component {
//
//     render() {
//         return (
//             <Navigator
//                 style={styles.container}
//                 initialRoute={{name: 'app'}}
//                 configureScene={() => Navigator.SceneConfigs.FadeAndroid}
//                 renderScene={(route, navigationOperations, onComponentRef) => <App navigator={navigationOperations} />}
//             />
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     }
// });
//
//
// AppRegistry.registerComponent(appName, () => App);
//
// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     Navigator,
//     StyleSheet
// } from 'react-native';
// import App from './App';
//
// class AdoptMe extends Component {
//
//     render() {
//         return (
//             <Navigator
//                 style={styles.container}
//                 initialRoute={{name: 'app'}}
//                 configureScene={() => Navigator.SceneConfigs.FadeAndroid}
//                 renderScene={(route, navigationOperations, onComponentRef) => <App navigator={navigationOperations} />}
//             />
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     }
// });
//
// AppRegistry.registerComponent('AdoptMe', () => AdoptMe);
//
