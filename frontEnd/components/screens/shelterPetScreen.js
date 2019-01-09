
'use strict';

import React, { Component } from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from "../../utils/fonts";

export default class PetScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            pet: props.navigation.getParam('item'),
            loveScreen: props.navigation.getParam('loveScreen')
        };
    }
    componentDidMount() {
        console.log(this.state.pet);
    }

    render() {
        return (
            <View style={styles.contentContainer}>
                <Header
                    //placement="left"
                    containerStyle={{
                        backgroundColor: '#4169E1', height:20 }}
                    backgroundColor={'#383938'}
                    outerContainerStyles={{height: 58}}
                    leftComponent={ <Icon name="arrow-back" size={30} style={styles.icon}
                                          onPress={ () => this.props.navigation.goBack()} />}
                    // centerComponent={{ text: 'Pet List', style: { color: '#fff',
                    //         fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
                    //         alignItems: 'center', flex:0.8 } }}
                     rightComponent={<Icon name="edit" size={33} style={styles.icon}
                                           onPress={ () => this.props.navigation.navigate('Edit', {item: this.state.pet, loveScreen: this.state.loveScreen})} /> }
                />


                <ScrollView contentConteinerStyle={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: this.state.pet.photo }} style={styles.petImage} />
                    </View>

                    <View style={styles.mainSection}>
                        <View style={styles.item}>
                            <Text style={styles.petName}>{this.state.pet.name}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.item}>
                            <Text style={styles.age}> Age: {this.state.pet.age}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.item}>
                            <Text style={styles.breed}> {this.state.pet.breed}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.item}>
                            <Text style={styles.petDescription}>{this.state.pet.description}</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.item}>
                            <Text style={styles.location}>Location: {this.state.pet.shelter.location}</Text>
                            {/*<Text style={styles.location}>Location:</Text>*/}
                        </View>
                    </View>

                </ScrollView>

            </View>


        );
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        fontFamily: Fonts.FranklinGothic
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
    item: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
    },
    age: {

    },
    breed: {

    },
    petDescription: {

    },
    location: {

    }
});
