import React, { Component } from 'react'
//import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
const { width, height } = Dimensions.get('window');
import SlidingPanel from 'react-native-sliding-up-down-panels';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import HeaderLayout from './homecomponents/HeaderLayout';
import SlidingPanelLayout from "./homecomponents/SlidingPanelLayout";
import {Fonts} from "../../utils/fonts";
import { Icon } from 'react-native-elements'

class Home extends Component {

    static navigationOptions = {
        header: null
    };

    constructor (props) {
        super(props)
        this.state = {
            entries: ['1', '2', '3', '4'],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0
        };
        this.onPressEvent = this.onPressEvent.bind(this);

    }
    onPressEvent() {
        console.log('You entered to your Profile screen! Well, at least imagine that you did ;)')
    }
    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.container}>

                <ParallaxImage
                    source={{ uri: 'https://media.forgecdn.net/avatars/107/154/636364134932167010.jpeg' }}
                    style={styles.image}
                    containerStyle={styles.imageContainer}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <SlidingPanel
                    headerLayoutHeight = {90}
                    headerLayout = { () =>
                        <HeaderLayout/>
                    }
                    slidingPanelLayout = { () =>
                        <SlidingPanelLayout/>
                    }
                />
            </View>
        );
    }


    render () {
        const itemWidth = Dimensions.get('window').width;
        const itemHeight = Dimensions.get('window').height;
        return (
            <View style={styles.container}>
                <Carousel
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    hasParallaxImages={true}
                    itemHeight={itemHeight}
                    itemWidth={itemWidth}
                    sliderWidth={itemWidth}
                    windowSize={1}
                />
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    imageContainer: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    bodyViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLayoutStyle: {
        width,
        height: 100,
        backgroundColor: '#2e2f2e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
    },
    slidingPanelLayoutStyle: {
        width,
        height,
        backgroundColor: '#717271',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
    },
    image: {
        //flexDirection: 'column',
        //justifyContent: 'space-around',
         resizeMode: 'stretch',
         height: 200
    }

});

export default Home
