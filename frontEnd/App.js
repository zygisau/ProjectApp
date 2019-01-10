import React, {PureComponent, Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground, AppRegistry} from 'react-native';
import {AppStackNavigator} from "./config/router";
import {AppStackNavigatorShelter} from "./config/router";
import {MainStackNavigator} from "./config/router";
import {store} from "./store";
import {connect} from 'remx';
import deviceStorage from "./components/services/deviceStorage";
import Home from "./components/screens/Home";


class App extends PureComponent {
    constructor(props) {
        super(props);
        //console.log("constructor calls loadJWT");
        //this.WhileLoadingScreen = this.WhileLoadingScreen.bind(this);
        //deviceStorage.deleteJWT(); deviceStorage.deleteIsShelter();
        deviceStorage.loadJWT();
        deviceStorage.loadIsShelter();
        //console.log("constructor came back from the function");
    }

    // WhileLoadingScreen () {
    //     setTimeout(() => {}, 900);
    //     deviceStorage.loadJWT();
    // }
    render() {
        if (this.props.Load === true) {
            if (!this.props.JWT) {
                return (
                    <AppStackNavigator/>
                );
            } else if (this.props.JWT) {
                if (this.props.isShelter) {
                    return <AppStackNavigatorShelter/>
                } else {
                    return <MainStackNavigator/>
                }
            }
        } else {
            return (
                <ImageBackground style={styles.container} source={require('./assets/images/bg3.jpg')}>
                    <View style={styles.top}>
                        <Image style={styles.logo} source={require('./assets/logos/logo.png')}/>
                    </View>
                </ImageBackground>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        color: '#000000',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    top: {
        //backgroundColor: '#f5fcff',
        //flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        //top: '10%',
        //resizeMode: 'cover',
    },
    logo: {
        top: '50%',
        width: 230,
        height: 214,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt(),
        Load: store.getLoad(),
        isShelter: store.getIsShelter()
    };
}

export default connect(mapStateToProps)(App);
