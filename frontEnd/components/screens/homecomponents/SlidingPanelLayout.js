import {Dimensions, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, {Component} from 'react';
import {Fonts} from "../../../utils/fonts";
const { width, height } = Dimensions.get('window');



class SlidingPanelLayout extends Component {
    constructor (props) {
        super(props);
        this.state = {
            description: 'I was only 9 years old. I loved Shrek so much, I had all the merchandise and movies. I pray to Shrek every night, thanking him for the life I’ve been given. “Shrek is love” I say, “Shrek is life." My dad hears me and calls me a faggot. I knew he was just jealous of my devotion to Shrek. I called him a cunt. He hits me and sends me to sleep. I\'m crying now and my face hurts. I lay in bed, really cold. I feel something warm... It\'s Shrek! I was so happy. He whispers in my ear "This is my swamp." He grabs me with his ogre hands, and puts me on my hands and knees. I\'m ready. I spread my ass cheeks for Shrek. He penetrates my butthole. It hurts so much, but I do it for Shrek. I can feel my butt tearing and eyes watering. I want to please Shrek. He roars a mighty roar as he fills my butt with his love. My dad walks in. Shrek looks him straight in the eye and says, "It\'s all ogre now." Shrek leaves through my window. Shrek is love. Shrek is life.'
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
        backgroundColor: 'rgba(113, 114, 113, 0.9)',
        //justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
    },
    commonTextStyle: {
        margin: '1%',
        color: 'white',
        fontSize: 18,
        fontFamily: Fonts.FranklinGothic,
        textAlign: 'justify'
    },
});