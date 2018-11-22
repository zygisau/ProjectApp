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

class compSignUpScreen extends React.Component {

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
      isLoggingIn: false,
      response: '', // only for testing
    };

    this.submit = this.submit.bind(this);
  };

  submit = () => {
    let params = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      grant_type: 'password'
    };
    fetch("http://10.0.2.2/api/v1/users", {
      //localhost:3000
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.state.response.setState(responseJson); // only for testing
        return responseJson;
      })

      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          contentContainerStyle={{flex: 1}}
          enableAutomaticScroll={true}>
          <View style={styles.logIn}>
            <Text style={styles.logInText}>SIGN UP</Text>
          </View>
          <View style={styles.logInputs}>
            <FormInput onChangeText={(firstName) => this.setState({firstName})} inputStyle={styles.border}
                       placeholderTextColor={'#f5fcff'} placeholder="FIRST NAME"/>

            <FormInput onChangeText={(lastName) => this.setState({lastName})} inputStyle={styles.border}
                       placeholderTextColor={'#f5fcff'} placeholder="LAST NAME"/>

            <FormInput onChangeText={(email) => this.setState({email})} inputStyle={styles.border}
                       placeholderTextColor={'#f5fcff'} placeholder="E-MAIL"/>

            <FormInput onChangeText={(password) => this.setState({password})} inputStyle={styles.border}
                       placeholderTextColor={'#f5fcff'} placeholder="PASSWORD"/>

            <FormInput inputStyle={styles.border} placeholderTextColor="#f5fcff"
                       placeholder="CONFIRM PASSWORD">{this.state.response}</FormInput>
          </View>
          <View style={styles.bottom}>
            <Button
              onPress={this.submit}
              buttonStyle={styles.buttonLog}
              //title={this.state.response}
              title="SIGN UP"
              textStyle={styles.btText}
              //console.log('The button is pressed')
            />
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    )
  }
}

export default compSignUpScreen;
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
    textAlign: 'left',
    //justifyContent: 'space-around',
  },
  logIn: {
    justifyContent: 'flex-end',
    //flexDirection: 'column',
    //bottom: '5%',
    //flex: 0.2,
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
    backgroundColor: '#2e2f2e',
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20
  }
});
