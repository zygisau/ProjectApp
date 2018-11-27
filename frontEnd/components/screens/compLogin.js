import React, {Component} from 'react';
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
import {newJWT} from "../../App"
import {Loading} from "../common/loading";

class compLoginScreen extends React.PureComponent {
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
        this.loginUser = this.loginUser.bind(this);
        this.focusTheField = this.focusTheField.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    // Inputs
    inputs = {};
    focusTheField = (id) => {
        this.inputs[id].focus();
    };

    loginUser = () => {
        this.setState({ error: '', loading: true });
        let params = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log({params});
        fetch("http://192.168.0.103:3000/api/v1/authenticate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(params),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                deviceStorage.saveItem("id_token", responseJson.token);
                newJWT(responseJson.token);
                console.log(responseJson);
            })
            .catch((error) => {
                console.log(error);
                this.onLoginFail();
            });
    };
    onLoginFail() {
        this.setState({
            error: 'Login Failed',
            loading: false
        });
    }

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
                            placeholder="LOGIN"
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
                            {!this.state.loading ?
                                <Button
                                    //onPress={() => {console.log('you tried to log in')}}
                                    onPress={this.loginUser}
                                    buttonStyle={styles.buttonLog}
                                    title="LOG IN"
                                    textStyle={styles.btText} />
                                :
                                <Loading size={'large'} />
                            }
                        </View>
                    
                    </KeyboardAwareScrollView>
                </ImageBackground>
        )
    }
}

export default compLoginScreen;

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
        borderRadius: 20,
        marginTop: 30,
        justifyContent: 'space-around',
    },
    errorTextStyle: {
        fontSize: 12,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: Fonts.FranklinGothic,
    }
});
