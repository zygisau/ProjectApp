// 'use-strict';
//
// import React, { Component } from 'react';
// import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
//
//
// class shelterAdd extends Component {
//     static navigationOptions = {
//         //header: null
//         title: 'Add a pet',
//     };
//
//     render() {
//         //const image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN';
//         const name='bob';
//         const age='Age: 3';
//         //const description='Bob is a lovely cat. He likes fish very much.';
//         const address='Vilnius ';
//         return (
//             //<ScrollView contentContainerStyle={styles.contentContainer}>
//                 /*<View style={styles.imageContainer}>
//                     /*<Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>*/
//                     /*source={require('../../images/bg2.jpeg')} style={styles.petImage} />*/
//                     /*: <View style={styles.noImage}><Text style={styles.noImageText}>No image</Text></View>*/
//                /* </View>*/
//
//                 <View style={styles.mainSection}>
//                     /*<Text style={styles.petDescription}>description</Text>*/
//                     <Text>name</Text>
//                     /*<Text>{age}</Text>*/
//                     /*<Text>{address}</Text>*/
//                     /*<Text>Email, phone number</Text>*/
//                 </View>
//
//                 //</ScrollView>
//         );
//     }
// }
// export default shelterAdd;
//
// const styles = StyleSheet.create({
//     mainSection: {
//         flex: 1,
//         padding: 10,
//     },
//     contentContainer: {
//         flex: 1,
//     },
//     imageContainer: {
//         backgroundColor: '#dddddd',
//         flex: 1,
//     },
//     // petImage: {
//     //     flex: 1,
//     //     //position: 'absolute',
//     //     // top: 0,
//     //     // left: 0,
//     //     // bottom: 0,
//     //     // right: 0,
//     // },
//     noImage: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     noImageText: {
//         color: '#aaaaaa',
//     },
//
// });

'use strict';

import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, View,} from 'react-native';

export default class PetScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <ScrollView contentConteinerStyle={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../images/bg2.jpeg')} style={styles.petImage} />
                </View>

                <View style={styles.mainSection}>
                    <Text style={styles.petName}>Pet name</Text>
                    <Text>Age: pet age</Text>
                    <Text>{'  '}</Text>
                    <Text style={styles.petDescription}>pet description should be a very long text about the pet a very long text still description a long text</Text>
                    <Text>{'   '}</Text>
                    <Text>Location: city, address</Text>
                    <Text>Email: phone number</Text>
                    <Text>space</Text>
                </View>
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    imageContainer: {
        backgroundColor: '#dddddd',
        flex: 1,
    },
    petName:{
        flex: 1,
        fontSize: 26,
        fontWeight: '500',
    },
    petImage: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        flex: 1,
        width: '100%',
        height: 400,
        //alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    noImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noImageText: {
        color: '#aaaaaa',
    },
    mainSection: {
        flex: 1,
        //padding: 10,
    },
});
