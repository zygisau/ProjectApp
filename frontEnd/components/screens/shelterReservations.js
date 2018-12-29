import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import {Button, Header, List, ListItem} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import Icon from 'react-native-vector-icons/MaterialIcons';
//import {AppStackNavigator} from "../../config/router";


const list = [
    {
        type: 'message',
        name: 'Amy Farha',
        avatar_url: 'https://lh3.googleusercontent.com/8l9fwqgx6nJolwrbpVkOaAZr22e1pkG8UREtaRS7wNL6HmAEkx-0djXqzcYJtUSZPEiD',
        subtitle: 'Has sent you a message'
    },
    {
        type: 'reservation',
        name: 'Chris Jackson',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN',
        subtitle: 'Has reserved Bob'
    },
    {
        type: 'message',
        name: 'Amy Farha',
        avatar_url: 'https://lh3.googleusercontent.com/8l9fwqgx6nJolwrbpVkOaAZr22e1pkG8UREtaRS7wNL6HmAEkx-0djXqzcYJtUSZPEiD',
        subtitle: 'Has sent you a message'
    },
    {
        type: 'reservation',
        name: 'Chris Jackson',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN',
        subtitle: 'Has reserved Bob'
    },
    {
        type: 'message',
        name: 'Amy Farha',
        avatar_url: 'https://lh3.googleusercontent.com/8l9fwqgx6nJolwrbpVkOaAZr22e1pkG8UREtaRS7wNL6HmAEkx-0djXqzcYJtUSZPEiD',
        subtitle: 'Has sent you a message'
    },
    {
        type: 'reservation',
        name: 'Chris Jackson',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN',
        subtitle: 'Has reserved Bob'
    },
    {
        type: 'message',
        name: 'Amy Farha',
        avatar_url: 'https://lh3.googleusercontent.com/8l9fwqgx6nJolwrbpVkOaAZr22e1pkG8UREtaRS7wNL6HmAEkx-0djXqzcYJtUSZPEiD',
        subtitle: 'Has sent you a message'
    },
    {
        type: 'reservation',
        name: 'Chris Jackson',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN',
        subtitle: 'Has reserved Bob'
    },
    {
        type: 'message',
        name: 'Amy Farha',
        avatar_url: 'https://lh3.googleusercontent.com/8l9fwqgx6nJolwrbpVkOaAZr22e1pkG8UREtaRS7wNL6HmAEkx-0djXqzcYJtUSZPEiD',
        subtitle: 'Has sent you a message'
    },
    {
        type: 'reservation',
        name: 'Chris Jackson',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN',
        subtitle: 'Has reserved Bob'
    },
    {
        type: 'message',
        name: 'Amy Farha',
        avatar_url: 'https://lh3.googleusercontent.com/8l9fwqgx6nJolwrbpVkOaAZr22e1pkG8UREtaRS7wNL6HmAEkx-0djXqzcYJtUSZPEiD',
        subtitle: 'Has sent you a message'
    },
    {
        type: 'reservation',
        name: 'Chris Jackson',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN',
        subtitle: 'Has reserved Bob'
    },
];

// const name

class shelterReservations extends Component {
    static navigationOptions = {
        header:null

    };


    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../images/bg2.jpeg')}>

                <View style={styles.top}>
                    <Header
                        //placement="left"
                        containerStyle={{
                            backgroundColor: '#4169E1', height:20 }}
                        outerContainerStyles={{height: 58}}
                        leftComponent={ <Icon name="arrow-back" size={30} style={styles.icon}
                                              onPress={ () => this.props.navigation.goBack()} />}
                        centerComponent={{ text: 'Reservations', style: { color: '#fff',
                                fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
                                alignItems: 'center', flex:0.8 } }}

                                />
                    <ScrollView style={styles.top}>

                        <List containerStyle={{marginTop: 0}}>
                            {
                                list.map((l) => (

                                    /*if{l.type='message'}{*/
                                            <ListItem
                                        roundAvatar
                                        avatar={{uri:l.avatar_url}}
                                        key={l.name}
                                        title={l.name}
                                        subtitle={l.subtitle}
                                        onPress={ () => this.props.navigation.navigate('Pet')}
                                        />
                                    /*}*/


                                ))
                            }
                        </List>

                    </ScrollView>
                </View>

            </ImageBackground>
        );
    }
}

export default shelterReservations;

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
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#f5fcff',
        // marginTop: 15,
         //flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        //top: '10%',
        //resizeMode: 'cover',
    },
    icon: {
        color:'white' ,
        flexDirection: 'row',
        flex:0

    }
});