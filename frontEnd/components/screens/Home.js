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
import { Icon } from 'react-native-elements'
import config from '../../config'


class Home extends Component {

    static navigationOptions = {
        header: null
    };

    constructor (props) {
        super(props)
        console.log(this.props);
        this.state = {
            entries: [],
            index: 0
        };
        this.infiniteLoop = this.infiniteLoop.bind(this)
    }
    componentDidMount () {
        this.loadPets();
    }
    componentWillReceiveProps(nextProps) {
        console.log('incoming');
        console.log(nextProps);
        if(nextProps.navigation.state.params !== undefined && nextProps.navigation.state.params.refreshPets) {
            this.setState({entries:[]}, () => {this.loadPets(); this.forceUpdate();});
            this._carousel.snapToItem(1, false)
        }
    }

    loadPets () {
        console.log('refreshed');
        fetch(`http://${config.FETCH_URL}/api/v1/pets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + this.props.JWT
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('response');
                let data = responseJson;
                let url = 'https://www.mobygames.com/images/shots/l/324581-line-rider-browser-screenshot-loading-screen-silverlight-version.png'
                data.push({name: '    ', photo: `${url}`});
                data.unshift({name: '   ', photo: `${url}`});

                this.setState({entries: data});
                setTimeout(() => {this._carousel.snapToItem(1, false, false);}, 1000);

            })
            .catch((error) => {
                console.log('You have got an error: ' + error);
            });
    }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.container}>
                <View style={styles.overlayLeft}>
                    <Icon
                        name='person'
                        size={40}
                        color='black'
                        onPress={() => {this.props.navigation.navigate('Profile')}}
                        underlayColor={'rgba(255, 225, 255, 0)'}
                    />
                </View>
                <View style={styles.overlayRight}>
                    <Icon
                        name='list'
                        size={40}
                        color='black'
                        onPress={() => {this.props.navigation.navigate('List')}}
                        underlayColor={'rgba(255, 255, 255, 0)'}
                    />
                </View>
                <View style={styles.container}>
                <ParallaxImage
                    source={{ uri: item.photo }}
                    style={styles.image}
                    containerStyle={styles.imageContainer}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />

                    { index === 0 || index === this.state.entries.length ?
                   null :  <SlidingPanel
                            headerLayoutHeight = {90}
                            headerLayout = { () =>
                                <HeaderLayout data={item} JWT={this.props.JWT}/>
                            }
                            slidingPanelLayout = { () =>
                                <SlidingPanelLayout data={item} />
                            }
                        />}
                </View>
            </View>
        );
    }
    infiniteLoop(newIndex) {
        console.log('infinite');

        let nIndex = newIndex;
        console.log(newIndex);
        console.log(this.state.entries);
        switch (newIndex) {
            case 0:
                nIndex = this.state.entries.length-2;
                break;

            case (this.state.entries.length-1):
                nIndex = 1;
                break;
        }
        if (nIndex !== newIndex) {
            console.log("AAAA");
            setTimeout(() => {this._carousel.snapToItem (nIndex, false, false);}, 1000)

        }


        // const newEntries = this.state.entries;
        // if (newIndex>this.state.index) {
        //     newEntries.push(newEntries.shift());
        //     this.setState({entries:newEntries});
        // }
        // else {
        //     newEntries.unshift(newEntries.pop());
        //     this.setState({entries:newEntries});
        // }
        // this.setState({index:newIndex});


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
                    ref={( c ) => {this._carousel = c;}}
                    onSnapToItem={this.infiniteLoop}
                />
            </View>

        );
    }

}

const styles = StyleSheet.create({
    overlayLeft: {
        position: "absolute",
        flexDirection: "row",
        top:10,
        left: 10,
        zIndex: 5
    },
    overlayRight: {
        position: "absolute",
        flexDirection: "row",
        top:10,
        right: 10,
        alignSelf: "flex-end",
        zIndex: 5
    },
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
        width: 100,
        height: 100,
        //position: 'absolute'
    }
});

function mapStateToProps(ownProps) {
    return {
        JWT: store.getJwt()
    };
}

export default connect(mapStateToProps)(Home);
