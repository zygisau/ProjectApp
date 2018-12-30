import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
const { width, height } = Dimensions.get('window');
import SlidingPanel from 'react-native-sliding-up-down-panels';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import HeaderLayout from './homecomponents/HeaderLayout';
import SlidingPanelLayout from "./homecomponents/SlidingPanelLayout";
import {store} from "../../store";
import {connect} from "remx";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';





class Home extends Component {

    static navigationOptions = {
        header: null
    };

    constructor (props) {
        super(props)
        console.log(this.props);
        this.state = {
            entries: [],
        };
        this.onPressEvent = this.onPressEvent.bind(this);

    }
    onPressEvent() {
        console.log('You entered to your Profile screen! Well, at least imagine that you did ;)')
    }

    componentDidMount () {
        this.loadPets();
    }


    loadPets () {
        fetch("http://192.168.0.105:3000/api/v1/pets", {
        //fetch("http://192.168.10.1:3000/api/v1/pets", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({entries: responseJson})
            })
            .catch((error) => {
                console.log('You have got an error: ' + error);
            });
    }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.container}>
                {/*<Button*/}
                    {/*icon={*/}
                        {/*<Icon*/}
                            {/*name='arrow-right'*/}
                            {/*size={5}*/}
                            {/*color='white'*/}
                        {/*/>*/}
                    {/*}*/}
                    {/*title=' '*/}
                    {/*onPress={this.onPressEvent()}*/}
                    {/*buttonStyle={styles.button}/>*/}
                <ParallaxImage
                    source={{ uri: item.photo }}
                    style={styles.image}
                    containerStyle={styles.imageContainer}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />

                <SlidingPanel
                    headerLayoutHeight = {90}
                    headerLayout = { () =>
                        <HeaderLayout data={item} JWT={this.props.JWT}/>
                    }
                    slidingPanelLayout = { () =>
                        <SlidingPanelLayout data={item} />
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
                    renderItem={this._renderItem.bind(this)}
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
    },
    button: {
        width: 50,
        height: 50,
        position: 'absolute'
    }
});

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt()
    };
}

export default connect(mapStateToProps)(Home);
