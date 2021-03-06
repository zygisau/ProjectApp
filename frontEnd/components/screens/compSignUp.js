import React, {PureComponent} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    ImageBackground,

} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import deviceStorage from '../services/deviceStorage';
import {Loading} from "../common/loading";
import {store} from "../../store";
import { connect } from 'remx';
import config from '../../config'

class CompSignUpScreen extends PureComponent {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            same: true,
            error: ''
        };

        this.submit = this.submit.bind(this);
        this.focusTheField = this.focusTheField.bind(this);
        this.onRegistrationFail = this.onRegistrationFail.bind(this);
        this.validation = this.validation.bind(this);

    };
    // Inputs
    inputs = {};
    focusTheField = (id) => {
        this.inputs[id].focus();
    };
    // Submitting
    submit = () => {
        let params = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        };
        //console.log({params});
        fetch(`http://${config.FETCH_URL}/api/v1/register`, {
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
                //console.log(responseJson);

            })
            .catch((error) => {
                //console.log(error);
                this.onRegistrationFail();
            })
    };

    onRegistrationFail() {
        this.setState({
            error: 'Registration Failed',
            loading: false
        });
    }
    validation ()
    {
        if(this.state.password === this.state.passwordConfirm) this.setState({same: true});
            else this.setState({same: false});
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
                    <View style={styles.logIn}>
                        <Text style={styles.logInText}>SIGN UP</Text>
                    </View>
                <KeyboardAwareScrollView>
                    <View style={styles.logInputs}>
                        <FormInput
                            onChangeText={(firstName) => this.setState({firstName})} inputStyle={styles.border}
                            placeholderTextColor={'#f5fcff'}
                            autoCorrect={false}
                            placeholder="FIRST NAME"
                            label={"Field 1"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                            onSubmitEditing={() => { this.focusTheField('field2'); }} />

                        <FormInput
                            onChangeText={(lastName) => this.setState({lastName})}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            placeholderTextColor={'#f5fcff'} placeholder="LAST NAME"
                            ref={input => { this.inputs['field2'] = input }}
                            label={"Field 2"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                            onSubmitEditing={() => { this.focusTheField('field3'); }} />

                        <FormInput
                            onChangeText={(email) => this.setState({email})}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            placeholderTextColor={'#f5fcff'}
                            placeholder="E-MAIL"
                            ref={input => { this.inputs['field3'] = input }}
                            label={"Field 3"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                            onSubmitEditing={() => { this.focusTheField('field4'); }}/>

                        <FormInput
                           secureTextEntry={true}
                           onChangeText={(password) => {this.setState({password}, this.validation);}}
                           inputStyle={styles.border}
                           autoCorrect={false}
                           autoCapitalize='none'
                           placeholderTextColor={'#f5fcff'}
                           placeholder="PASSWORD"
                           ref={input => { this.inputs['field4'] = input }}
                           label={"Field 4"}
                           blurOnSubmit={ false }
                           returnKeyType={ 'next' }
                           onSubmitEditing={() => { this.focusTheField('field5'); }} />

                        <FormInput
                            onChangeText={(passwordConfirm) => {this.setState({passwordConfirm}, this.validation);}}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize='none'
                            inputStyle={styles.border}
                            placeholderTextColor="#f5fcff"
                            placeholder="CONFIRM PASSWORD"
                            ref={input => { this.inputs['field5'] = input }}
                            label={"Field 5"}
                            blurOnSubmit={ false }/>
                        {!this.state.same &&
                            <Text style={styles.errorTextStyle}>
                            Passwords must match
                            </Text> }
                    </View>

                    <View style={styles.bottom}>
                        {!this.state.loading ?
                            <Button
                                onPress={this.submit}
                                buttonStyle={styles.buttonLog}
                                title="SIGN UP"
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
        //backgroundColor: '#686769',
        //justifyContent: 'flex-end',
        //flexDirection: 'column',
        //flex: 0.6,
        marginTop: 30,
        textAlign: 'left',
        //justifyContent: 'space-around',
    },
    logIn: {
        justifyContent: 'flex-end',
        //flexDirection: 'column',
        //bottom: '5%',
        //flex: 0.2,
        marginTop: 30,
        textAlign: 'left',
        left: 30,
    },
    logInText: {
        fontSize: 50,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: Fonts.FranklinGothic,
    },
    //
    bottom: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        marginBottom: 40,
        marginTop: 40
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
        justifyContent: 'center',
        backgroundColor: '#2e2f2e',
        color: '#ffffff',
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20
    },
    errorTextStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: Fonts.FranklinGothic,
        flexDirection: 'column',
        alignItems: 'stretch',
        top: '1%',
        width: '100%',
        backgroundColor: '#db0600'
    }
});

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt()
    };
}

export default connect(mapStateToProps)(CompSignUpScreen);
