import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import {AppStackNavigator} from "../../config/router";

class shelterMain extends Component {
    static navigationOptions = {
        header: null


    };

    render() {
        return (

            <ImageBackground style={styles.container} source={require('../../images/bg1.jpeg')}>
                <View style={styles.top}>
                    <Text style={styles.name}>Shelter's name</Text>
                </View>
                <View style={styles.fill}>
                </View>
                <View style={styles.middle}>
                    <Button title="Go to Pet List"
                            buttonStyle={styles.button}
                            onPress={ () => this.props.navigation.navigate('List')} />
                    <Button title="Go to Love Count"
                            buttonStyle={styles.button}
                            onPress={ () => this.props.navigation.navigate('Love')} />
                    <Button title="Go to Reservations"
                            buttonStyle={styles.button}
                            onPress={ () => this.props.navigation.navigate('Reservations')} />


                </View>
            </ImageBackground>



        );
    }
}

export default shelterMain;

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    name: {
        flex: 0,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        /*borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100*/

    },
    top: {
        //backgroundColor: '#f5fcff',
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

        //top: '10%',
        //resizeMode: 'cover',
    },
    middle: {
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        //top: '25%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    fill:{
        flex: 0.1,
    },
    button: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        /*color: 'green',*/
        borderRadius: 100,
        backgroundColor: '#4169E1',

        /*borderColor: 'red',
        borderWidth: 5,*/

    },

});