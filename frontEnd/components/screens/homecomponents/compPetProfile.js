import React, {PureComponent} from 'react';
import {
    StyleSheet,
    ImageBackground,
} from 'react-native';
import {Fonts} from "../../../utils/fonts";


class PetProfile extends PureComponent {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/bg3.jpg')}>

            </ImageBackground>
        )
    }
}
export default PetProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'space-around',
        //alignItems: 'stretch',
        backgroundColor: '#f5fcff',
        //width: '100%',
        //height: '100%',
        resizeMode: 'cover',
    }
});