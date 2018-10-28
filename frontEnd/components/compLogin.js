import React, { Component } from 'react';
import {StyleSheet, Text, View} from "react-native";

class Window extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello from Login Component!</Text>
            </View>
        )
    }
}
export default Window

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});