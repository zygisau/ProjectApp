import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { Fonts } from "./utils/fonts";
//import Window from './components/compLogin';

//const bg = '.assets/bg.jpg';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
          <ImageBackground style={styles.container} source={require('./assets/images/bg1.jpg')}>
              <View style={styles.top}>
                  <Image style={styles.logo} source={require('./assets/logos/logo.svg')} />
              </View>
              <View style={styles.middle}>
              <Button
                  buttonStyle={styles.buttonFacebook}
                  title='CONTINUE WITH FACEBOOK'
                  textStyle={styles.btText}  />
              <Button
                  buttonStyle={styles.buttonGoogle}
                  title='CONTINUE WITH GOOGLE'
                  textStyle={styles.btText}  />
              <Button
                  buttonStyle={styles.buttonSign}
                  title='SIGN UP'
                  textStyle={styles.btText}  />
              </View>
              <View style={styles.bottom}>
                  <Text style={styles.already}>Already a user?</Text>
                  <Button
                      buttonStyle={styles.buttonLog}
                      title='LOG IN'
                      textStyle={styles.btText}  />
              </View>
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  top: {
      backgroundColor: '#f5fcff',
      flex: 0.4,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      //top: '10%',
      //resizeMode: 'cover',
  },
  logo: {
      width: 210,
      height: 210,
      flexDirection: 'row',
      alignItems: 'center',
  },
  middle: {
      flex: 0.3,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'stretch',
      //top: '25%',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
  },
  already: {
      //position: 'absolute',
      //width: '100%',
      //height: '100%',
      //top: '73%',
      textAlign: 'center',
      color: '#f5fcff',
      padding: 0,
      margin: 0,
      //fontWeight: 'bold',
      fontSize: 20,
      fontFamily: Fonts.FranklinGothic,
  },
  btText: {
      letterSpacing: 5,
      textAlign: 'center',
      fontSize: 19,
      fontFamily: Fonts.FranklinGothic,
  },
  buttonFacebook: {
      height: 55,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#3b5998',
      borderRadius: 100,
  },
  buttonGoogle: {
      height: 55,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#db4437',
      borderRadius: 100,
  },
  buttonSign: {
      height: 55,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#6a9500',
      borderRadius: 100,
  },
  bottom: {
      flex: 0.3,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'stretch',
      //top: '30%',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
  buttonLog: {
      height: 55,
      backgroundColor: '#2e2f2e',
      borderRadius:100,
      //top: '30%',
  }

});
