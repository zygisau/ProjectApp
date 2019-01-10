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
            list: [],
            user: []
        };

    };
    componentDidMount() {
        this.fetchPets()
    }
    fetchPets() {
        fetch(`http://${config.FETCH_URL}/api/v1/pets/reservedPets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
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
                        backgroundColor={'#383938'}
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
                                this.state.list.map((l) => (
                                    /*if{l.type='message'}{*/
                                    <ListItem
                                        roundAvatar
                                        avatar={{uri: l.photo}}
                                        key={l._id}
                                        title={`${l.reservedBy.firstName} ${l.reservedBy.lastName}`}
                                        //<Text> {l.name} </Text>
                                        subtitle={`Has reserved ${l.name}`}
                                        hideChevron
                                        //onPress={ () => this.props.navigation.navigate('Pet')}
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
        //marginBottom: 40
    },
    icon: {
        color:'white' ,
        flexDirection: 'row',
        flex:0
    }
});
