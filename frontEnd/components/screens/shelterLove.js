// import React, {Component} from 'react';
// import {Alert, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
// import {Button} from 'react-native-elements';
// import {Fonts} from "../../utils/fonts";
// //import {AppStackNavigator} from "../../config/router";
//
// class shelterLove extends Component {
//     static navigationOptions = {
//         //header:null
//         title:'Love Count',
//         headerStyle: {
//             backgroundColor: '#4169E1',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold'
//         },
//     };
//
//     render() {
//         return (
//             <ImageBackground style={styles.container} source={require('../../images/bg3.jpeg')}>
//
//                 <View style={styles.top}>
//
//                     <Button title="Go to main screen"
//                             onPress={ () => this.props.navigation.navigate('Home')} />
//
//                 </View>
//             </ImageBackground>
//         );
//     }
// }
//
// export default shelterLove;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         //flexDirection: 'column',
//         //justifyContent: 'space-around',
//         //alignItems: 'stretch',
//         backgroundColor: '#f5fcff',
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//     },
//     top: {
//         //backgroundColor: '#f5fcff',
//         flex: 0.4,
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         //top: '10%',
//         //resizeMode: 'cover',
//     }
// });

'use strict';

import React, { Component } from 'react';
import {ActivityIndicator, ListView, Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import PetCell from './PetCellLove';
//import Icon from "./shelterList";
import {Header} from "react-native-elements";

const API_KEY = 'cb55e117215c6eb73506d7164b0a3b6d';

const convert = (obj) => {
    let result = {};
    _.map(obj, (item, key) => {
        let value;
        if (typeof (item) === 'object') {
            if (item.$t) { value = item.$t; }
            else { value = convert(item); }
        }
        else { value = item; }
        result[key] = value;
    });
    return result;
};

let resultsCache = [];

export default class App extends Component {
    static navigationOptions = {
        header:null
        // title: 'Love Count',
        // headerStyle: {
        //     backgroundColor: '#4169E1',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold'
        // }
    };

    state = {
        isLoading: false,
        isLoadingTail: false,
        lastOffset: 0,
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
    };

    componentDidMount() {
        this.fetchPets();
    }

    fetchPets = () => {

        const offset = this.state.lastOffset,
            URL = `https://api.petfinder.com/pet.find?location=US&format=json&offset=${offset}&key=${API_KEY}`;

        if (_.isEmpty(resultsCache)) {
            this.setState({isLoading: true});
        }

        fetch(URL)
            .then((response) => response.json())
            .catch((error) => {
                this.setState({
                    dataSource: this.getDataSource([]),
                    isLoading: false,
                });
            })
            .then((data) => {
                resultsCache = _.concat(resultsCache, _.toArray(convert(data.petfinder.pets.pet)));
                this.setState({
                    isLoading: false,
                    isLoadingTail: false,
                    lastOffset: data.petfinder.lastOffset.$t,
                    dataSource: this.getDataSource(resultsCache),
                });
            })
            .done();
    }

    getDataSource = (pets: Array<any>): ListView.DataSource => {
        return this.state.dataSource.cloneWithRows(pets);
    }

    onEndReached = () => {
        // We're already fetching
        if (this.state.isLoadingTail) {
            return;
        }
        this.setState({
            isLoadingTail: true,
        });
        this.fetchPets();
    }

    renderRow = (
        pet: Object,
        sectionID: number | string,
        rowID: number | string,
        highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void
    ) => {
        return (
            <PetCell
                key={pet.id}
                onHighlight={() => highlightRowFunc(sectionID, rowID)}
                onUnhighlight={() => highlightRowFunc(null, null)}
                pet={pet}
            />
        );
    }

    renderFooter = () => {
        if (!this.state.isLoadingTail) {
            return <View style={styles.scrollSpinner} />;
        }

        return <ActivityIndicator style={styles.scrollSpinner} />;
    }

    render() {
        const { isLoading } = this.state;
        return (
            <View style={styles.container}>
                <Header
                    //placement="left"
                    containerStyle={{
                        backgroundColor: '#4169E1', height:20 }}
                    outerContainerStyles={{height: 58}}
                    leftComponent={ <Icon name="arrow-back" size={30} style={styles.icon}
                                          onPress={ () => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Love Count', style: { color: '#fff',
                            fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
                            alignItems: 'center', flex:0.8 } }}
                     //rightComponent={<Icon name="add-circle-outline" size={33} style={styles.icon}
                                           //onPress={ () => this.props.navigation.navigate('Add')} /> }
                />
                {isLoading
                    ? <View style={styles.loading}><Text>Loading...</Text></View>
                    : <ListView
                        dataSource={this.state.dataSource}
                        renderFooter={this.renderFooter}
                        renderRow={this.renderRow}
                        onEndReached={this.onEndReached}
                        automaticallyAdjustContentInsets={false}
                        keyboardDismissMode="on-drag"
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false}
                    />
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 64 : 0,
        flex: 1,
        backgroundColor: 'white',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollSpinner: {
        marginVertical: 20,
    },
    icon: {
        color:'white' ,
        flexDirection: 'row',
        flex:0

    }
});