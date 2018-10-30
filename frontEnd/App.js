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
              <Button
                  buttonStyle={styles.buttonFacebook}
                  title='CONTINUE WITH FACEBOOK'
                  textStyle={styles.btText}  />
              <Button
                  buttonStyle={styles.buttonGoogle}
                  title='CONTINUE WITH GOOGLE'
                  textStyle={styles.btText}  />
              <Text style={styles.already}>Already a user?</Text>
              <Button
                  buttonStyle={styles.buttonLog}
                  title='LOG IN'
                  textStyle={styles.btText}  />
          </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  already: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '73%',
      textAlign: 'center',
      color: '#f5fcff',
      padding: 0,
      margin: 0,
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: Fonts.FranklinGothic,
  },
  btText: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      letterSpacing: 10,
      fontWeight: 'bold',
      fontSize: 25,
      fontFamily: Fonts.FranklinGothic,
  },
  buttonFacebook: {
      position: 'relative',
      width: '140%',
      height: '25%',
      backgroundColor: '#2e2f2e',
      borderRadius:100,
      top: '10%',
  },
  buttonGoogle: {
      position: 'relative',
      width: '140%',
      height: '25%',
      backgroundColor: '#2e2f2e',
      borderRadius: 100,
      top: '10%',
  },
  buttonLog: {
      position: 'relative',
      width: '140%',
      height: '25%',
      backgroundColor: '#2e2f2e',
      borderRadius:100,
      top: '30%',
  }
});
