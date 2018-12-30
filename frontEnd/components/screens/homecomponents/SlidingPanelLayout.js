import {Dimensions, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, {Component} from 'react';
import {Fonts} from "../../../utils/fonts";
const { width, height } = Dimensions.get('window');



class SlidingPanelLayout extends Component {
    constructor (props) {
        super(props);
        this.state = {
            description: props.data.description
        };
    }
    render() {
        return(
            <View style={styles.slidingPanelLayoutStyle}>
                <Text style={styles.commonTextStyle}>{this.state.description}</Text>
            </View>
        );}
}
export default SlidingPanelLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    slidingPanelLayoutStyle: {
        paddingTop: '6%',
        paddingLeft: '1%',
        justifyContent: 'space-between',
        width,
        height,
        backgroundColor: 'rgba(232, 232, 232, 0.9)',
        //justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
    },
    commonTextStyle: {
        margin: '1%',
        color: 'black',
        fontSize: 18,
        fontFamily: Fonts.FranklinGothic,
        textAlign: 'justify'
    },
});
