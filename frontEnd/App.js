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
                  buttonStyle={styles.button}
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
  btText: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
      fontFamily: Fonts.FranklinGothic,
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '30%',
      backgroundColor: '#2e2f2e',
      borderRadius:100,
  }
});
