// import deviceStorage from "../services/deviceStorage";
// import {Image, ImageBackground, StyleSheet, View} from "react-native";
// import React from "react";
//
// export default class Loading {
//     constructor() {
//         Loading.load();
//     }
//     static load() {
//         deviceStorage.loadJWT();
//     }
//     render() {
//         return(
//             <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
//                 <View style={styles.top}>
//                     <Image style={styles.logo} source={require('../../assets/logos/logo.png')}/>
//                 </View>
//             </ImageBackground>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         //flexDirection: 'column',
//         //justifyContent: 'space-around',
//         //alignItems: 'stretch',
//         backgroundColor: '#f5fcff',
//         color: '#000000',
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//     },
//     top: {
//         //backgroundColor: '#f5fcff',
//         //flex: 0.4,
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         //top: '10%',
//         //resizeMode: 'cover',
//     },
//     logo: {
//         width: 230,
//         height: 214,
//         flexDirection: 'row',
//         alignItems: 'center',
//     }
// });