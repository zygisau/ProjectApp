import React, {PureComponent} from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Text, Image, Alert,
} from 'react-native';
import {Fonts} from "../../../utils/fonts";
import deviceStorage from "../../services/deviceStorage";
import {Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


class Profile extends PureComponent {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        Alert.alert(
            'Are you sure?',
            'You will be logged out',
            [
                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                {text: 'OK', onPress: () => {deviceStorage.deleteJWT(); deviceStorage.deleteIsShelter()}},
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.logo} source={require('../../../assets/logos/logo.png')}/>
                </View>
                <View style={styles.text}>
                    <Text style={styles.title}>First Name: {this.state.data.firstName}</Text>
                    <Text style={styles.title}>Last Name: {this.state.data.lastName}</Text>
                    <Text style={styles.title}>E-mail address: {this.state.data.email}</Text>
                </View>
                <View style={styles.buttonsGroup}>
                    <Button
                    title='BACK'
                    buttonStyle={styles.button}
                    onPress={() => {this.props.navigation.goBack()}}
                    titleStyle={{fontFamily: Fonts.FranklinGothic}}/>
                    <Button
                        title='LOG OUT'
                        buttonStyle={styles.button}
                        titleStyle={{color:'red', fontFamily: Fonts.FranklinGothic}}
                        onPress={this.logOut}
                    />
                </View>
            </View>
        )
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#bce9ff',
        resizeMode: 'cover',
    },
    text: {
        top: 30,
    },
    title: {
        fontFamily: Fonts.FranklinGothic,
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 25,
    },
    top: {
        //backgroundColor: '#f5fcff',
        top: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        //top: '10%',
        //resizeMode: 'cover',
    },
    logo: {
        width: 230,
        height: 214,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonsGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        bottom: 20,
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: '#8fb5ca'
    }
});