import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import {AppStackNavigator} from "../../config/router";

class compShelterReservations extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
    };
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../images/bg4.jpeg')}>
                <View style={styles.top}>
                    <Text> Reservations </Text>
                </View>
            </ImageBackground>
        );
    }
}

export default compShelterReservations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    top: {
        //backgroundColor: '#f5fcff',
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        //top: '10%',
        //resizeMode: 'cover',
    }
})