'use strict';

import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, View, ImageBackground, Alert} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PetScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <ImageBackground style={styles.container} source={require('../../images/bg2.jpeg')}>
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    contentContainerStyle={{flex: 1}}
                    enableAutomaticScroll={true}>
                    <View style={styles.logIn}>
                        <Text style={styles.logInText}>Add a pet {'      '}
                        </Text>

                    </View>

                    <View style={styles.logInputs}>
                        <FormInput
                             onChangeText={(Name) => this.setState({Name})} inputStyle={styles.border}
                            placeholderTextColor={'#7c7e7c'}
                            autoCorrect={false}
                            placeholder="Name"
                            label={"Field 1"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                        />
                        <FormInput
                            onChangeText={(Age) => this.setState({Age})}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            keyboardType={'numeric'}
                            placeholderTextColor={'#7c7e7c'} placeholder="Age"
                            //ref={input => { this.inputs['field2'] = input }}
                            //label={"Field 2"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                             />
                        <FormInput
                            onChangeText={(Breed) => this.setState({Breed})}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            placeholderTextColor={'#7c7e7c'}
                            placeholder="Breed"
                            //ref={input => { this.inputs['field2'] = input }}
                            //label={"Field 2"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                        />
                        <FormInput
                            onChangeText={(Description) => this.setState({Description})}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            placeholderTextColor={'#7c7e7c'}
                            placeholder="Description"
                            //ref={input => { this.inputs['field3'] = input }}
                            //label={"Field 3"}
                            blurOnSubmit={ false }
                            //returnKeyType={ 'next' }
                             />


                        <FormInput
                            //secureTextEntry={true}
                            onChangeText={(Location) => {this.setState({Location}, this.validation);}}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            //autoCapitalize='none'
                            placeholderTextColor={'#7c7e7c'}
                            placeholder="Location"
                            //ref={input => { this.inputs['field4'] = input }}
                            //label={"Field 4"}
                            blurOnSubmit={ false }
                            //returnKeyType={ 'next' }
                            />
                        <FormInput
                            //secureTextEntry={true}
                            onChangeText={(photo) => {this.setState({photo}, this.validation);}}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            autoCapitalize='none'
                            placeholderTextColor={'#7c7e7c'}
                            placeholder="Add a photo"
                            //ref={input => { this.inputs['field4'] = input }}
                            //label={"Field 4"}
                            blurOnSubmit={ false }
                            //returnKeyType={ 'next' }
                        />
                    </View>
                    <View style={styles.bottom1}>
                            <View style={styles.buttonContainer}>
                                <Button title="Add"
                                        style={styles.button}
                                        backgroundColor={'#2e2f2e'}
                                        onPress={() => {Alert.alert('You added a pet');}} />
                            </View>
                        <Text>{'     '}</Text>
                            <View style={styles.buttonContainer}>
                                <Button title="Cancel"
                                        backgroundColor={'#2e2f2e'}
                                        style={styles.button}
                                        onPress={ () => this.props.navigation.goBack()}/>
                            </View>


                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>

        );
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
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
        //fontFamily: Fonts.FranklinGothic,
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
        //fontFamily: Fonts.FranklinGothic,
    },
    border: {
        height: 55,
        justifyContent: 'center',
        backgroundColor: '#383938',
        color:'white',
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20
    },
    errorTextStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        //fontFamily: Fonts.FranklinGothic,
        flexDirection: 'column',
        alignItems: 'stretch',
        top: '1%',
        width: '100%',
        backgroundColor: '#db0600'
    },
    bottom1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: '5%',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    buttonContainer: {
         borderRadius: 15,
         backgroundColor: '#2e2f2e',
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-around',
        //alignItems: 'stretch',
    },
    button: {
        //height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
