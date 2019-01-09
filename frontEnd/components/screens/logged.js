import React, {PureComponent} from 'react';
import { View, Alert } from 'react-native';
import {Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import deviceStorage from "../services/deviceStorage";
import {store} from "../../store";
import { connect } from 'remx';
//import CompLoginScreen from "./compLogin";

class LoggedIn extends PureComponent {
    render() {
        return(
            <View style={styles.container}>
                <Button
                    //onPress={() => {console.log('you logged out');}}
                    onPress={() => {deviceStorage.deleteJWT(); deviceStorage.deleteIsShelter()}}
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

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt()
    };
}

export default connect(mapStateToProps)(LoggedIn);