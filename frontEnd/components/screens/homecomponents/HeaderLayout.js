import {Dimensions, StyleSheet, Text, View, TouchableOpacity, ToastAndroid} from "react-native";
import React, {Component} from 'react';
import {Fonts} from "../../../utils/fonts";

const {width, height} = Dimensions.get('window');
import {Icon} from 'react-native-elements'
import config from "../../../config";


class HeaderLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data._id,
            name: props.data.name,
            age: props.data.age,
            loved: props.data.isLiked,
        };
        this.onPressEvent = this.onPressEvent.bind(this);
    }

    onPressEvent() {
        if (!this.state.loved) {
            this.setState({loved: true}, this.submitLove);
        }
        else {
            this.setState({loved: false}, this.submitLove);
        }
    }

    submitLove() {
        fetch(`http://${config.FETCH_URL}/api/v1/pets/${this.state.id}/${this.state.loved ? 'like' : 'unlike'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.isLiked) {
                    ToastAndroid.showWithGravity(
                        'The pet has been added to your list!',
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP,
                    );
                } else if (!responseJson.isLiked) {
                    ToastAndroid.showWithGravity(
                        'The pet has been removed from your list!',
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP,
                    );
                }
            })
            .catch((error) => {
                console.log('You have got an error: ' + error);

                this.setState({loved: !this.state.loved})
            });
    }

    render() {
        return (
            <View style={styles.headerLayoutStyle}>
                <View style={styles.heartContainer}>
                    <TouchableOpacity>
                        <Icon name='favorite'
                              color={this.state.loved ? 'rgba(255, 132, 132, 0.73)' : 'rgba(255, 71, 71, 0.9)'}
                              size={60}
                              onPress={this.onPressEvent
                              }
                              underlayColor={'rgba(255, 225, 255, 0)'}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>
                    {
                        this.state.name
                    }
                </Text>
                <Text style={styles.age}> Age: {this.state.age}</Text>
            </View>
        );
    }
}

export default HeaderLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    headerLayoutStyle: {
        flex: 1,
        flexDirection: 'row',
        width,
        height: 90,
        backgroundColor: 'rgba(232, 232, 232, 0.9)',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    name: {
        top: '6%',
        left: '20%',
        //alignItems: 'center',
        //paddingLeft: 10,
        color: 'black',
        fontSize: 30,
        fontFamily: Fonts.FranklinGothic,
    },
    age: {
        top: '6%',
        right: '20%',
        //alignItems: 'center',
        //paddingRight: 10,
        color: 'black',
        fontSize: 30,
        fontFamily: Fonts.FranklinGothic,
    },
    heartContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
