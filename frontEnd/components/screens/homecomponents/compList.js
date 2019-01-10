import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList, Alert, ToastAndroid
} from 'react-native';
import {Header, List, ListItem, SearchBar} from "react-native-elements";
import {Fonts} from "../../../utils/fonts";
import config from "../../../config";
import {store} from "../../../store";
import {connect} from "remx";
import deviceStorage from "../../services/deviceStorage";
import HeaderLayout from "./HeaderLayout";
import { Icon } from 'react-native-elements'


class PetList extends PureComponent {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.removeFromList = this.removeFromList.bind(this);
        this.reload = this.reload.bind(this);
    }
    componentDidMount() {
        this.fetchPets();
        this.props.navigation.addListener('willFocus', this.reload)
    }
    reload() {
        //console.log(this.props.reservationMade);
        if(this.props.reservationMade) {
            this.fetchPets();
            //console.log('fetching')
        }
    }
    fetchPets() {
        fetch(`http://${config.FETCH_URL}/api/v1/pets/likedList`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                this.setState({data: responseJson})
            })
            .catch((error) => {
                console.log('You have got an error: ' + error);
            });
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };
    renderEmpty = () => {
        return (
            <View style={styles.container}>
                <View style={styles.textIfEmpty}>
                    <Text style={styles.text}>Whoops! Seems like You haven't liked any pets.</Text>
                    <Text style={styles.text}>{'All your liked pets in the future will be listed here <3'}</Text>
                </View>
            </View>
        )
    };
    onLongPressEvent(item) {
            Alert.alert(
                'Are you sure?',
                'The pet will be removed from your list',
                [
                    {
                        text: 'Cancel', onPress: () => {
                        }, style: 'cancel'
                    },
                    {
                        text: 'YES', onPress: () => {
                            this.removeFromList(item)
                        }
                    },
                ],
                {cancelable: false}
            )
    }
    // changeState() {
    //         this.setState({item.loved: false}, this.submitLove);
    // }
    removeFromList(item) {
        fetch(`http://${config.FETCH_URL}/api/v1/pets/${item._id}/unlike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                    ToastAndroid.showWithGravity(
                        'The pet has been removed from your list!',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    );
                this.setState({data:this.state.data.filter(pet => pet._id!==item._id)});
                this.props.navigation.navigate("Main", {refreshPets: true})
            })
            .catch((error) => {
                console.log('You have got an error: ' + error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={{
                        backgroundColor: '#423131', height:20 }}
                    backgroundColor={'#fafbff'}
                    outerContainerStyles={{height: 58}}
                    leftComponent={ <Icon name="arrow-back" underlayColor={'rgba(255, 255, 255, 0)'} color={'black'} size={30} style={styles.icon}
                                          onPress={ () => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Loved list', style: { color: 'black',
                            fontSize:21, fontWeight: '500', letterSpacing:2, flexDirection: 'row',
                            alignItems: 'center', flex:0.8 } }}
                />
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item })=>(
                        <ListItem
                            roundAvatar
                            key={item._id}
                            title={`${item.name}`}
                            subtitle={item.age}
                            avatar={{ uri: item.photo }}
                            containerStyle={{ borderBottomWidth: 0 }}
                            onPress={() => {this.props.navigation.navigate('PetProfile', {item: item})}}
                            //onLongPress={() => {this.onLongPressEvent(item)}}
                        />
                    )}
                    keyExtractor={item => item._id}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListEmptyComponent={this.renderEmpty}
                    /*scrollToIndex={('index')}
                    scrollToOffset={('animated')}*/ />
            </List>
            </View>
        )
    };
}
function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt(),
        reservationMade: store.getReservationMade()
    };
}

export default connect(mapStateToProps)(PetList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 225, 255, 0)',
    },
    textIfEmpty: {
        flex: 1,
        height: 600,
        flexDirection: 'column',
        fontFamily: Fonts.FranklinGothic,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 225, 255, 0)',
    },
    text: {
        backgroundColor: 'rgba(255, 225, 255, 0)',
        color: 'black',
        fontSize: 18,
        fontFamily: Fonts.FranklinGothic,
        alignSelf: 'center',
        textAlign: 'center'
    },
    icon: {
        color:'white' ,
        flexDirection: 'row',
        flex:0
    },
});
