import React, {PureComponent} from 'react';
import {Alert, StyleSheet, Text, View, Image, ImageBackground, AppRegistry} from 'react-native';
import {AppStackNavigator} from "./config/router";
//import { Loading } from './components/common/loading';
import LoggedIn from './components/screens/logged';
//import Loading from './components/screens/loading';
import {store} from "./store";
import { connect } from 'remx';
import deviceStorage from "./components/services/deviceStorage";
//import CompHomeScreen from "./components/screens/compLoginHome";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true
        };
        console.log("constructor calls loadJWT");
        deviceStorage.loadJWT();
        //Loading.load(() => this.setState({loaded: true}));
        console.log("constructor came back from the function");
    }

    render() {
        if (!this.props.JWT) {
            return (
                <AppStackNavigator/>
            );
        } else if (this.props.JWT) {
            return (
                <LoggedIn/>
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
        width: 230,
        height: 214,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt()
    };
}

export default connect(mapStateToProps)(App);