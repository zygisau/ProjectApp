
'use strict';

import React, { Component } from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PetScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <View>
                <Header
                    //placement="left"
                    containerStyle={{
                        backgroundColor: '#4169E1', height:20 }}
                    outerContainerStyles={{height: 58}}
                    leftComponent={ <Icon name="arrow-back" size={30} style={styles.icon}
                                          onPress={ () => this.props.navigation.goBack()} />}
                    // centerComponent={{ text: 'Pet List', style: { color: '#fff',
                    //         fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
                    //         alignItems: 'center', flex:0.8 } }}
                     rightComponent={<Icon name="edit" size={33} style={styles.icon}
                                           onPress={ () => this.props.navigation.navigate('Add')} /> }
                />


                <ScrollView contentConteinerStyle={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../images/bg2.jpeg')} style={styles.petImage} />
                    </View>

                    <View style={styles.mainSection}>
                        <Text style={styles.petName}> Pet name</Text>
                        <Text> Age: pet age</Text>
                        <Text> Pet Breed</Text>
                        <Text style={styles.petDescription}> pet description</Text>
                        <Text>{'   '}</Text>
                        <Text> Location: city, address</Text>
                        <Text>{'   '}</Text>
                        <Text> Contacts: phone number</Text>
                    </View>

                </ScrollView>

            </View>


        );
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    imageContainer: {
        backgroundColor: '#dddddd',
        flex: 1,
    },
    petName:{
        flex: 1,
        fontSize: 26,
        fontWeight: '500',
    },
    petImage: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        flex: 1,
        width: '100%',
        height: 400,
        //alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    noImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noImageText: {
        color: '#aaaaaa',
    },
    mainSection: {
        flex: 1,
        //padding: 10,
    },
    icon: {
        color:'white' ,
        flexDirection: 'row',
        flex:0
    },
});
