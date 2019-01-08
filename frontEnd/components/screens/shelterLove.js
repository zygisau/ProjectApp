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

//
// 'use strict';
//
// import React, { Component } from 'react';
// import {ActivityIndicator, ListView, Platform, StyleSheet, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import _ from 'lodash';
// import PetCell from './PetCellLove';
// //import Icon from "./shelterList";
// import {Header} from "react-native-elements";
//
// const API_KEY = 'cb55e117215c6eb73506d7164b0a3b6d';
//
// const convert = (obj) => {
//     let result = {};
//     _.map(obj, (item, key) => {
//         let value;
//         if (typeof (item) === 'object') {
//             if (item.$t) { value = item.$t; }
//             else { value = convert(item); }
//         }
//         else { value = item; }
//         result[key] = value;
//     });
//     return result;
// };
//
// let resultsCache = [];
//
// export default class App extends Component {
//     static navigationOptions = {
//         header:null
//         // title: 'Love Count',
//         // headerStyle: {
//         //     backgroundColor: '#4169E1',
//         // },
//         // headerTintColor: '#fff',
//         // headerTitleStyle: {
//         //     fontWeight: 'bold'
//         // }
//     };
//
//     state = {
//         isLoading: false,
//         isLoadingTail: false,
//         lastOffset: 0,
//         dataSource: new ListView.DataSource({
//             rowHasChanged: (row1, row2) => row1 !== row2,
//         }),
//     };
//
//     componentDidMount() {
//         this.fetchPets();
//     }
//
//     fetchPets = () => {
//
//         const offset = this.state.lastOffset,
//             URL = `https://api.petfinder.com/pet.find?location=US&format=json&offset=${offset}&key=${API_KEY}`;
//
//         if (_.isEmpty(resultsCache)) {
//             this.setState({isLoading: true});
//         }
//
//         fetch(URL)
//             .then((response) => response.json())
//             .catch((error) => {
//                 this.setState({
//                     dataSource: this.getDataSource([]),
//                     isLoading: false,
//                 });
//             })
//             .then((data) => {
//                 resultsCache = _.concat(resultsCache, _.toArray(convert(data.petfinder.pets.pet)));
//                 this.setState({
//                     isLoading: false,
//                     isLoadingTail: false,
//                     lastOffset: data.petfinder.lastOffset.$t,
//                     dataSource: this.getDataSource(resultsCache),
//                 });
//             })
//             .done();
//     }
//
//     getDataSource = (pets: Array<any>): ListView.DataSource => {
//         return this.state.dataSource.cloneWithRows(pets);
//     }
//
//     onEndReached = () => {
//         // We're already fetching
//         if (this.state.isLoadingTail) {
//             return;
//         }
//         this.setState({
//             isLoadingTail: true,
//         });
//         this.fetchPets();
//     }
//
//     renderRow = (
//         pet: Object,
//         sectionID: number | string,
//         rowID: number | string,
//         highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void
//     ) => {
//         return (
//             <PetCell
//                 key={pet.id}
//                 onHighlight={() => highlightRowFunc(sectionID, rowID)}
//                 onUnhighlight={() => highlightRowFunc(null, null)}
//                 pet={pet}
//             />
//         );
//     }
//
//     renderFooter = () => {
//         if (!this.state.isLoadingTail) {
//             return <View style={styles.scrollSpinner} />;
//         }
//
//         return <ActivityIndicator style={styles.scrollSpinner} />;
//     }
//
//     render() {
//         const { isLoading } = this.state;
//         return (
//             <View style={styles.container}>
//                 <Header
//                     //placement="left"
//                     containerStyle={{
//                         backgroundColor: '#4169E1', height:20 }}
//                     outerContainerStyles={{height: 58}}
//                     leftComponent={ <Icon name="arrow-back" size={30} style={styles.icon}
//                                           onPress={ () => this.props.navigation.goBack()} />}
//                     centerComponent={{ text: 'Love Count', style: { color: '#fff',
//                             fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
//                             alignItems: 'center', flex:0.8 } }}
//                      //rightComponent={<Icon name="add-circle-outline" size={33} style={styles.icon}
//                                            //onPress={ () => this.props.navigation.navigate('Add')} /> }
//                 />
//                 {isLoading
//                     ? <View style={styles.loading}><Text>Loading...</Text></View>
//                     : <ListView
//                         dataSource={this.state.dataSource}
//                         renderFooter={this.renderFooter}
//                         renderRow={this.renderRow}
//                         onEndReached={this.onEndReached}
//                         automaticallyAdjustContentInsets={false}
//                         keyboardDismissMode="on-drag"
//                         keyboardShouldPersistTaps="always"
//                         showsVerticalScrollIndicator={false}
//                     />
//                 }
//             </View>
//         );
//     }
//
// }
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: Platform.OS === 'ios' ? 64 : 0,
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     loading: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     scrollSpinner: {
//         marginVertical: 20,
//     },
//     icon: {
//         color:'white' ,
//         flexDirection: 'row',
//         flex:0
//
//     }
// });

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import {Button, Header, List, ListItem} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import config from "../../config";
import {store} from "../../store";
import {connect} from "remx";
//import {AppStackNavigator} from "../../config/router";

class shelterReservations extends Component {
    static navigationOptions = {
        header:null

    };
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    };
    componentWillReceiveProps(nextProps) {
        console.log('incoming');
        console.log(nextProps);
        if(nextProps.navigation.state.params !== undefined && nextProps.navigation.state.params.refreshPets) {
            this.setState({list:[]}, () => {this.fetchPets(); this.forceUpdate();});
        }
    }
    componentDidMount() {
        this.fetchPets()
    }
    fetchPets() {
        fetch(`http://${config.FETCH_URL}/api/v1/pets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({list: responseJson})
            })
            .catch((error) => {
                console.log('You have got an error: ' + error);
            });
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../images/bg2.jpeg')}>

                <View style={styles.top}>
                    <Header
                        //placement="left"
                        containerStyle={{
                            backgroundColor: '#4169E1', height:20 }}
                        outerContainerStyles={{height: 58}}
                        leftComponent={ <Icon1 name="arrow-back" size={30} style={styles.icon}
                                              onPress={ () => this.props.navigation.goBack()} />}
                        centerComponent={{ text: 'Love Count', style: { color: '#fff',
                                fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
                                alignItems: 'center', flex:0.8 } }}
                         //rightComponent={<Icon name="add-circle-outline" size={33} style={styles.icon}
                                               //onPress={ () => this.props.navigation.navigate('Add')} /> }
                    />
                    <ScrollView style={styles.top}>

                        <List containerStyle={styles.listContainer}>
                            {
                                this.state.list.map((l) => (

                                    <ListItem containerStyle={styles.itemContainer}
                                              avatarStyle={styles.avatarContainer}
                                              avatarContainerStyle={styles.avatarContainerStyle}

                                              titleNumberOfLines={2} subtitleNumberOfLines={2}
                                              avatar={{uri:l.photo}}
                                              key={l._id}
                                              rightIcon={{color:'white'}}
                                              title={/*l.name}*/
                                                  <Text style={styles.title}>{'  '} {l.name} {"\n"} {' '} Age: {l.age} </Text>
                                              }
                                              subtitle={<Text style={styles.subtitle} numberOfLines={1}> {'  '}
                                                  <Icon name="heart" size={20} color= "red"/*"#4F8EF7"*/ />
                                                  {l.likes.length}
                                              </Text>}
                                              onPress={ () => this.props.navigation.navigate('Pet', {item: l, loveScreen: true})}
                                    />



                                ))
                            }
                        </List>

                    </ScrollView>
                </View>

            </ImageBackground>
        );
    }
}

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt()
    };
}

export default connect(mapStateToProps)(shelterReservations);

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

    },
    listContainer: {
        marginTop: 0,
        flex: 0,
    },
    itemContainer: {
        height: 110,
    },
    avatarContainer: {
        backgroundColor: '#dddddd',
        width: 90,
        height: 90,
        //marginRight: 10
    },
    avatarContainerStyle: {
        width: 90,
        height: 90,
        backgroundColor: '#dddddd',
    },
    title: {
        //flex: 1,
        fontSize: 18,
        fontWeight: '200',
    },
    subtitle: {
      fontSize: 20,
      fontWeight: '200',

    },
});