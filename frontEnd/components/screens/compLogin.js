import React, {PureComponent} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import deviceStorage from '../services/deviceStorage';
import {store} from "../../store";
import { connect } from 'remx';
import config from "../../config";

//import CompSignUpScreen from "./compSignUp";

class CompLoginScreen extends PureComponent {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        };
        this.submit = this.submit.bind(this);
        this.focusTheField = this.focusTheField.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    // Inputs
    inputs = {};
    focusTheField = (id) => {
        this.inputs[id].focus();
    };

    submit () {
        //console.log('you tried to log in');
        this.setState({ error: '', loading: true });
        let params = {
            email: this.state.email,
            password: this.state.password,
        };
        //console.log({params});
        fetch(`http://${config.FETCH_URL}/api/v1/authenticate`, {
        //206.189.4.112 - Servakas
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(params),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                deviceStorage.saveItem("id_token", responseJson.token);
                deviceStorage.saveIsShelter("isShelter", responseJson._doc.isShelter);
                store.setShelterID(responseJson._doc.shelter);
                //console.log(responseJson._doc.shelter);
                //console.log(shelterID);
                //console.log('THIS IS RESPONSE FROM LOGIN');
                //console.log(responseJson);
            })
            .catch((error) => {
                console.log('You have got an error: ' + error);
                this.onLoginFail();
            });
    };
    onLoginFail = () => {
        this.setState({
            error: 'Username or password is incorrect',
            loading: false,
        });
        console.log(this.state.error);
    };

    render() {
        return (
                <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        contentContainerStyle={{flex: 1}}
                        enableAutomaticScroll={true}>
                    <View style={styles.logIn}>
                        <Text style={styles.logInText}>LOG IN</Text>
                    </View>
                    <View style={styles.logInputs}>
                        <FormInput
                            onChangeText={(email) => this.setState({email})}
                            inputStyle={styles.border}
                            placeholderTextColor={'#f5fcff'}
                            autoCorrect={false}
                            placeholder="E-MAIL"
                            label={"Field 1"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                            onSubmitEditing={() => { this.focusTheField('field2'); }} />

                        <FormInput
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            placeholderTextColor={'#f5fcff'}
                            placeholder="PASSWORD"
                            ref={input => { this.inputs['field2'] = input }}
                            label={"Field 2"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' } />
                    </View>
                        <View style={styles.bottom}>
                                <Button
                                    //onPress={() => {console.log('you tried to log in')}}
                                    onPress={this.submit}
                                    buttonStyle={styles.buttonLog}
                                    title="LOG IN"
                                    textStyle={styles.btText} />
                        </View>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    </KeyboardAwareScrollView>
                </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        //width: '100%',
        //height: '100%',
        resizeMode: 'cover',
    },
    //
    logInputs: {
        //justifyContent: 'space-around',
        //flexDirection: 'column',
        //flex: 0.2,
        marginTop: 50,
        textAlign: 'left',
        //left: 30,
    },
    logIn: {
        justifyContent: 'flex-end',
        //flexDirection: 'column',
        //flex: 0.3,
        marginTop: 50,
        textAlign: 'left',
        left: 30,
        //bottom: '5%',
    },
    logInText: {
        fontSize: 50,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: Fonts.FranklinGothic,
    },
    //
    bottom: {
        //flex: 0.25,
        flexDirection: 'column',
        alignItems: 'stretch',
        top: '5%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    buttonLog: {
        height: 55,
        backgroundColor: '#2e2f2e',
        borderRadius: 100,
        //top: '30%',
    },
    btText: {
        letterSpacing: 5,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: Fonts.FranklinGothic,
    },
    border: {
        height: 55,
        backgroundColor: '#2e2f2e',
        color: '#ffffff',
        borderRadius: 20,
        marginTop: 30,
        justifyContent: 'space-around',
        fontFamily: Fonts.FranklinGothic,
    },
    errorTextStyle: {
        fontSize: 12,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: Fonts.FranklinGothic,
    }
});

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt(),
        shelterID: store.getShelterID()
    };
}

export default connect(mapStateToProps)(CompLoginScreen);
