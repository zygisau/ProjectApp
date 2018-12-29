import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
const { width, height } = Dimensions.get('window');
import SlidingPanel from 'react-native-sliding-up-down-panels';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';




class Home extends Component {

    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)
        this.state = {
            entries: ['1', '2', '3', '4'],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0
        }
    }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.container}>
                <Text>
                    { index }
                </Text>
                <ParallaxImage
                    source={{ uri: 'https://media.forgecdn.net/avatars/107/154/636364134932167010.jpeg' }}
                    style={styles.image}
                    containerStyle={styles.imageContainer}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <SlidingPanel
                    headerLayoutHeight = {100}
                    headerLayout = { () =>
                        <View style={styles.headerLayoutStyle}>
                            <Text style={styles.commonTextStyle}>My Awesome sliding panel</Text>
                        </View>
                    }
                    slidingPanelLayout = { () =>
                        <View style={styles.slidingPanelLayoutStyle}>
                            <Text style={styles.commonTextStyle}>The best thing about me is you</Text>
                        </View>
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
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slidingPanelLayoutStyle: {
        width,
        height,
        backgroundColor: '#7E52A0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
    image: {
        //flexDirection: 'column',
        //justifyContent: 'space-around',
         resizeMode: 'stretch',
         height: 200
    }

});

export default Home
