// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
//  import {List, ListItem} from 'react-native-elements';
// //import {Fonts} from "../../utils/fonts";
// //import {AppStackNavigator} from "../../config/router";
//
//
// const list = [
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//     {
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },{
//         name: 'Amy Farha',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//         subtitle: 'Vice President'
//     },
//     {
//         name: 'Chris Jackson',
//         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//         subtitle: 'Vice Chairman'
//     },
//
// ];
//
//
// class shelterList extends Component {
//     static navigationOptions = {
//         //header:null
//         title:'Pet List',
//         headerStyle: {
//             backgroundColor: '#4169E1',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold'
//         },
//
//     };
//
//     render() {
//         return (
//             <ImageBackground style={styles.container} source={require('../../images/bg2.jpeg')}>
//
//                 <View style={styles.top}>
//                     <ScrollView style={styles.top}>
//                         {/*<List style={styles.top}>*/}
//                     {
//
//                         list.map((l, i) => (
//
//                             <ListItem
//                                 key={i}
//                                 leftAvatar={{ source: { uri: l.avatar_url } }}
//                                 title={l.name}
//                                 subtitle={
//                                     <View style={styles.top}>
//                                         <Text style={styles.top}>
//                                             l.subtitle
//                                         </Text>
//                                     </View>
//                                 }
//                             />
//                         ))
//
//                     }
//                         {/*</List>*/}
//                     </ScrollView>
//                 </View>
//
//             </ImageBackground>
//         );
//     }
// }
//
// export default shelterList;
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
//         fontWeight: 'bold',
//         fontSize: 20,
//         //backgroundColor: '#f5fcff',
//         // marginTop: 15,
//          //flex: 1,
//         // flexDirection: 'column',
//         // justifyContent: 'space-around',
//         // alignItems: 'center',
//         //top: '10%',
//         //resizeMode: 'cover',
//     },
//     button: {
//         height: 105,
//         flexDirection: 'row',
//         alignItems: 'center',
//         color: 'green',
//         borderRadius: 100,
//         backgroundColor: '#db4437',
//         borderColor: 'red',
//         borderWidth: 5,
//
//     }
// });

//
// 'use strict';
//
// import React, { Component } from 'react';
// import { Alert,
//     ActivityIndicator,
//     ListView,
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity
// } from 'react-native';
// import { Button, Header } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import _ from 'lodash';
// import PetCell from './PetCell1';
// import {AppStackNavigator} from "../../config/router";
// import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
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
// //const AddPet = ({ navigation }) => (<PetAdd navigation={navigation}/>);
//
// //const  navigate = this.props.navigation;
//
// let resultsCache = [];
//
// export default class App extends Component {
//     // buttonPressed = () => {
//     //     this.props.navigation.navigate('Add');
//     // };
//     static navigationOptions = {
//         header:null
//         // title: 'Pet List',
//         // headerStyle: {
//         //     backgroundColor: '#4169E1',
//         // },
//         // headerTintColor: '#fff',
//         // headerTitleStyle: {
//         //     fontWeight: 'bold'
//         // },
//         // headerRight:(
//         //     <Button title="Add"
//         //             onPress={ () => this.props.navigation.goBack()}
//         //         //onPress={this.buttonPressed}
//         //     />
//         //
//         // )
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
//             <TouchableOpacity onPress={ () => this.props.navigation.navigate('Pet')}>
//             <PetCell
//                 key={pet.id}
//                 onHighlight={() => highlightRowFunc(sectionID, rowID)}
//                 onUnhighlight={() => highlightRowFunc(null, null)}
//                 pet={pet}
//
//             />
//             </TouchableOpacity>
//
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
//                     centerComponent={{ text: 'Pet List', style: { color: '#fff',
//                             fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
//                             alignItems: 'center', flex:0.8 } }}
//                     rightComponent={<Icon name="add-circle-outline" size={33} style={styles.icon}
//                                           onPress={ () => this.props.navigation.navigate('Add')} /> }
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
//                         />
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
//     iconText:{
//         color: 'white',
//         fontSize: 16,
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
import Icon from 'react-native-vector-icons/MaterialIcons';
//import {AppStackNavigator} from "../../config/router";


const list = [
    {
        name: 'Devin',
        avatar_url: 'https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Devin is a sweet and playful dog. He likes bones very much.',
        age: '3',

    },
    {
        name: 'Pumpkin',
        avatar_url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Pumpkin is the sweetest and she is becoming a sassy and confident lady! She deserves a great life.',
        age: '6',
    },
    {
        name: 'Jazzy',
        avatar_url: 'https://images.pexels.com/photos/1345191/pexels-photo-1345191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Jazzy is young and energetic. Most time she spends playing with toys.',
        age: '2',
    },
    {
        name: 'Sheldon',
        avatar_url: 'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Sheldon is very cute. He spends most of the day sleeping.',
        age: '5',
    },
    {
        name: 'Baxter',
        avatar_url: 'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Baxter is full of energy. We wonder if he even sleeps at all, because all the time he is running and playing.',
        age: '1',
    },
    {
        name: 'Chrisy',
        avatar_url: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Chrisy is cute cat. Spends most of the day sleeping and the other asking for food.',
        age: '4',
    },
    {
        name: 'Silvester',
        avatar_url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Silvester is very young and beautiful one. He is very calm and will grow up to be very handsome cat.',
        age: '6 months',
    },
    {
        name: 'Jerico',
        avatar_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Jerico has very nice fur. Spends the day playing and asking for food.',
        age: '2',
    },
    {
        name: 'Amy',
        avatar_url: 'https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Amy is active dog. She requires activities as well as treats.',
        age: '3',
    },
    {
        name: 'Jack',
        avatar_url: 'https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Jack is an old fellow. He seen a lot in his life but is very calm and friendly. ',
        age: '7',
    },
    {
        name: 'Teddy',
        avatar_url: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Teddy is very playful and likes running in general. Likes bones really much.',
        age: '3',
    },
    {
        name: 'Molly',
        avatar_url: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Molly loves raw meat. She also shows interest in hunting.',
        age: '2',
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

                        containerStyle={{
                            backgroundColor: '#4169E1', height:20 }}
                        outerContainerStyles={{height: 58}}
                        leftComponent={ <Icon name="arrow-back" size={30} style={styles.icon}
                                              onPress={ () => this.props.navigation.goBack()} />}
                        centerComponent={{ text: 'Pet List', style: { color: '#fff',
                                fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
                                alignItems: 'center', flex:0.8 } }}
                        rightComponent={<Icon name="add-circle-outline" size={33} style={styles.icon}
                                              onPress={ () => this.props.navigation.navigate('Add')} /> }
                    />
                    <ScrollView style={styles.top}>

                        <List containerStyle={styles.listContainer}>
                            {
                                list.map((l) => (

                                    <ListItem containerStyle={styles.itemContainer}
                                              avatarStyle={styles.avatarContainer}
                                              avatarContainerStyle={styles.avatarContainerStyle}

                                              titleNumberOfLines={2} subtitleNumberOfLines={2}
                                              avatar={{uri:l.avatar_url}}
                                              key={l.name}

                                              title={/*l.name}*/
                                                  <Text style={styles.title}>{'  '} {l.name} {"\n"} {' '} Age: {l.age} </Text>
                                              }
                                              subtitle={l.description}
                                              onPress={ () => this.props.navigation.navigate('Pet')}
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
        fontSize: 16,
        fontWeight: '200',
    },
});