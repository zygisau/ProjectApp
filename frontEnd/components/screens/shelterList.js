import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import {Button, Header, List, ListItem} from 'react-native-elements';
import {Fonts} from "../../utils/fonts";
import Icon from 'react-native-vector-icons/MaterialIcons';
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
    componentDidMount() {
        this.fetchPets();
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
            <View style={styles.container} source={require('../../images/bg2.jpeg')}>

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
                                this.state.list.map((l) => (

                                    <ListItem containerStyle={styles.itemContainer}
                                              avatarStyle={styles.avatarContainer}
                                              avatarContainerStyle={styles.avatarContainerStyle}

                                              titleNumberOfLines={2} subtitleNumberOfLines={2}
                                              avatar={{uri:l.photo}}
                                              key={l._id}

                                              title={/*l.name}*/
                                                  <Text style={styles.title}>{'  '} {l.name} {"\n"} {' '} Age: {l.age} </Text>
                                              }
                                              subtitle={l.description}
                                              onPress={ () => this.props.navigation.navigate('Pet', {item: l})}
                                    />
                                ))
                            }
                        </List>

                    </ScrollView>
                </View>
            </View>
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
        fontSize: 16,
        fontWeight: '200',
    },
});