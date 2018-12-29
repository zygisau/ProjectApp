import {Dimensions, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, {Component} from 'react';
import {Fonts} from "../../../utils/fonts";
const { width, height } = Dimensions.get('window');
import { Icon } from 'react-native-elements'


class HeaderLayout extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Shrek',
            age: 10
        };
        this.onPressEvent = this.onPressEvent.bind(this);
    }
    onPressEvent() {
        console.log('You liked shrek')
    }
    render() {
        return(
        <View style={styles.headerLayoutStyle}>
            <TouchableOpacity onPress={this.onPressEvent} style={styles.heart}>
                <Icon
                    name='favorite'
                    color='red'
                    size={60} />
            </TouchableOpacity>
            <Text style={styles.name}>{this.state.name}</Text>

            <Text style={styles.age}>Age: {this.state.age}</Text>
        </View>
    );}
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
        backgroundColor: 'rgba(45, 46, 45, 0.9)',
        justifyContent: 'space-between',
        borderRadius:10,
    },
    name: {
        top:'6%',
        left: '20%',
        //alignItems: 'center',
        //paddingLeft: 10,
        color: 'white',
        fontSize: 30,
        fontFamily: Fonts.FranklinGothic,
    },
    age: {
        top:'6%',
        right: '20%',
        //alignItems: 'center',
        //paddingRight: 10,
        color: 'white',
        fontSize: 30,
        fontFamily: Fonts.FranklinGothic,
    },
    heart: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});