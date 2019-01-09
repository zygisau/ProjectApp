'use strict';

import React, { Component } from 'react';
import {Image, ScrollView, StyleSheet, Text, View, ImageBackground, Alert, ToastAndroid, Picker} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/MaterialIcons';
import config from "../../config";
import {store} from "../../store";
import {connect} from "remx";
import {Fonts} from "../../utils/fonts";

class PetScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            pet: props.navigation.getParam('item'),
            loveScreen: props.navigation.getParam('loveScreen'),
            petTypes: []
        };
        this.submitChanges = this.submitChanges.bind(this);
        this.getPetTypes = this.getPetTypes.bind(this);
    }
    componentDidMount() {
        this.getPetTypes();
    }

    getPetTypes() {
        fetch(`http://${config.FETCH_URL}/api/v1/petTypes/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                this.setState({petTypes: responseJson})
            })
    }
    submitChanges() {
        let params = {
            name: this.state.pet.name,
            age: this.state.pet.age,
            breed: this.state.pet.breed,
            description: this.state.pet.description,
            petType: this.state.pet.petType,
            photo: this.state.pet.photo,
        };
        //console.log('hey');
        //console.log({params});
        fetch(`http://${config.FETCH_URL}/api/v1/pets/${this.state.pet._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
            body: JSON.stringify(params),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log('hou');
                //console.log(responseJson);
                ToastAndroid.showWithGravity(
                    'Pet has been updated.',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                );
            })
            .then((responseJson) => {
                if(this.state.loveScreen !== undefined && this.state.loveScreen) {
                    this.props.navigation.navigate("Love", {refreshPets: true})
                }
                    else {
                        this.props.navigation.navigate("List", {refreshPets: true})
                    }
            })
            .catch((error) => {
                console.log('You have got an error: ' + error);
            });
    }
    render() {
        const pickerOptions = this.state.petTypes.map((item) => (
            <Picker.Item label={item.name} value={item._id} />
        ));
        return (
            <ImageBackground style={styles.container} source={require('../../images/bg2.jpeg')}>
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    contentContainerStyle={{flex: 1}}
                    enableAutomaticScroll={true}>
                    <View style={styles.logIn}>
                        <Text style={styles.logInText}>Edit pet {'      '}
                        </Text>

                    </View>

                    <View style={styles.logInputs}>
                        <FormInput
                            onChangeText={(pet) => this.setState(prevState => ({
                                pet: {
                                    ...prevState.pet,
                                    name: pet,
                                }}))}
                            inputStyle={styles.border}
                            placeholder={'Name'}
                            placeholderTextColor={'#7c7e7c'}
                            autoCorrect={false}
                            label={"Field 1"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                        >{this.state.pet.name}</FormInput>
                        <FormInput
                            onChangeText={(pet) => this.setState(prevState => ({
                                pet: {
                                    ...prevState.pet,
                                    age: pet,
                                }}))}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            keyboardType={'numeric'}
                            placeholderTextColor={'#7c7e7c'} placeholder="Age"
                            //ref={input => { this.inputs['field2'] = input }}
                            //label={"Field 2"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                        >{this.state.pet.age}</FormInput>
                        <FormInput
                            onChangeText={(value) => this.setState(prevState => ({
                                pet: {
                                    ...prevState.pet,
                                    breed: value,
                                }}))}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            placeholderTextColor={'#7c7e7c'}
                            placeholder="Breed"
                            //ref={input => { this.inputs['field2'] = input }}
                            //label={"Field 2"}
                            blurOnSubmit={ false }
                            returnKeyType={ 'next' }
                        >{this.state.pet.breed}</FormInput>
                        <FormInput
                            onChangeText={(value) => this.setState(prevState => ({
                                pet: {
                                    ...prevState.pet,
                                    description: value,
                                }}))}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            placeholderTextColor={'#7c7e7c'}
                            placeholder="Description"
                            //ref={input => { this.inputs['field3'] = input }}
                            //label={"Field 3"}
                            blurOnSubmit={ false }
                            //returnKeyType={ 'next' }
                        >{this.state.pet.description}</FormInput>
                        <View style={styles.borderPicker}>
                            <Picker
                            selectedValue={this.state.pet.petType}
                            style={{color: 'white'}}
                            onValueChange={(value) => this.setState(prevState => ({
                                pet: {
                                    ...prevState.pet,
                                    petType: value,
                                }}))}>
                                {pickerOptions}
                        </Picker>
                        </View>
                        <FormInput
                            //secureTextEntry={true}
                            onChangeText={(pet) => this.setState(prevState => ({
                                pet: {
                                    ...prevState.pet,
                                    photo: pet,
                                }}))}
                            inputStyle={styles.border}
                            autoCorrect={false}
                            autoCapitalize='none'
                            placeholderTextColor={'#7c7e7c'}
                            placeholder="Add a photo"
                            //ref={input => { this.inputs['field4'] = input }}
                            //label={"Field 4"}
                            blurOnSubmit={ false }
                            //returnKeyType={ 'next' }
                        >{this.state.pet.photo}</FormInput>
                    </View>
                    <View style={styles.bottom1}>
                        <View style={styles.buttonContainer}>
                            <Button title="Update"
                                    style={styles.button}
                                    backgroundColor={'#2e2f2e'}
                                    onPress={this.submitChanges} />
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

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt()
    };
}

export default connect(mapStateToProps)(PetScreen);

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
        justifyContent: 'center',
        backgroundColor: '#383938',
        color:'white',
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20
    },
    borderPicker: {
        height: 55,
        width: '92%',
        alignSelf: 'center',
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
        fontFamily: Fonts.FranklinGothic,
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
