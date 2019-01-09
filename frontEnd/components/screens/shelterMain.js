import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import {AppStackNavigator} from "../../config/router";
import deviceStorage from "../services/deviceStorage";

class shelterMain extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {

        };
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        Alert.alert(
            'Are you sure?',
            'You will be logged out',
            [
                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                {text: 'OK', onPress: () => {deviceStorage.deleteJWT(); deviceStorage.deleteIsShelter()}},
            ],
            { cancelable: false }
        )
    }
    render() {
        return (

            <ImageBackground style={styles.container} source={require('../../images/bg1.jpeg')}>
                <View style={styles.top}>
                    <Text style={styles.name}>Shelter</Text>
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
                <View style={styles.bottom}>
                    <Button
                        title='LOG OUT'
                        buttonStyle={styles.buttonLogOut}
                        titleStyle={{color:'red', fontFamily: Fonts.FranklinGothic}}
                        onPress={this.logOut}
                    />
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
        fontFamily: Fonts.FranklinGothic,
    },
    top: {
        //backgroundColor: '#f5fcff',
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: '#383938',
        // borderRadius: 50
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
        backgroundColor: '#383938',

        /*borderColor: 'red',
        borderWidth: 5,*/

    },
    bottom: {

        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonLogOut: {
        width: 100,
        height: 40,
        backgroundColor: '#383938',
        borderRadius: 50
    }
});
