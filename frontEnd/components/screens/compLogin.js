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

class compLoginScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.function = this.function.bind(this);
  }

  function() {

  };

  render() {
    return (
        <KeyboardAwareScrollView
            style={{ backgroundColor: '#4c69a5' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        >
        <ImageBackground style={styles.container} source={require('../../assets/images/bg3.jpg')}>
          <View style={styles.logIn}>
            <Text style={styles.logInText}>LOG IN</Text>
          </View>
          <View style={styles.logInputs}>
              <FormInput inputStyle={styles.border} placeholderTextColor={'#f5fcff'} placeholder={"    E-MAIL"} />

              <FormInput inputStyle={styles.border} placeholderTextColor={'#f5fcff'} placeholder={"    PASSWORD"} />
          </View>
          <View style={styles.bottom}>
            <Button
              buttonStyle={styles.buttonLog}
              title='LOG IN'
              textStyle={styles.btText}
            />
          </View>
        </ImageBackground>
        </KeyboardAwareScrollView>
    )
  }
}

export default compLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-around',
    //alignItems: 'stretch',
    backgroundColor: '#f5fcff',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  //
  logInputs: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 0.2,
    textAlign: 'left',
    //left: 30,
  },
  logIn: {
    justifyContent: 'flex-end',
    //flexDirection: 'column',
    flex: 0.3,
    textAlign: 'left',
    left: 30,
    bottom: '5%',
  },
  logInText: {
    fontSize: 50,
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: Fonts.FranklinGothic,
  },
  //
  bottom: {
    flex: 0.25,
    flexDirection: 'column',
    //justifyContent: 'space-around',
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

  }
});
