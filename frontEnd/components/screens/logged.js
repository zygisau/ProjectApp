import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import {Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import deviceStorage from "../services/deviceStorage";

export default class LoggedIn extends Component {
    constructor(props){
        super(props);
        this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    }

    render() {
        return(
            <View style={styles.container}>
                <Button
                    //onPress={() => {console.log('you logged out');}}
                    onPress={this.deleteJWT}
                    buttonStyle={styles.buttonLanguage}
                    title='LOG OUT'
                    textStyle={styles.btText}/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    btText: {
        letterSpacing: 5,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: Fonts.FranklinGothic,
    },
};
