import React, {PureComponent} from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Tile,
    Image, Dimensions,
    ScrollView, Alert
} from 'react-native';
const { width, height } = Dimensions.get('window');
import {Fonts} from "../../../utils/fonts";
import {Text} from "react-native-elements";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import deviceStorage from "../../services/deviceStorage";

class PetProfile extends PureComponent {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            pet: this.props.navigation.getParam('item'),
            //reserved: this.state.pet.isReserved
            //canReserve = reserved
            //reservedByUser = thisGuyReserved
        };
        this.changeState = this.changeState.bind(this);
    }
    // componentDidMount() {
    //     // CIA BUS FETCH
    //     /**/
    //     // TADA KAZKUR REIK IDET SITA TIKRINIMA
    //     // JEI NIEKAS NEUZREZERVAVO VADINAS, THISGUYRESERVED: TRUE, KAD DUOTU UZREZERVUOT
    //     if (1) this.setState({thisGuyReserved: true});
    //         else this.setState({thisGuyReserved: false})
    // }
    //
    // changeState() {
    //     console.log('change!');
    //     if (!this.state.reserved) {
    //         console.log('change!');
    //         this.setState({reserved: true}, this.submitReservation);
    //     }
    //     else {
    //         console.log('change!');
    //         this.setState({reserved: false}, this.submitReservation);
    //     }
    // }
    onPressEvent() {
        const change = () => {this.changeState()};
        Alert.alert(
            'Do you really want to make reservation?',
            'Pet will be reserved for you for one week. After one week your reservation will be declined and made available to reserve for others. This change cannot be undone.',
            [
                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                {text: 'OK', onPress: () => {change()}},
            ],
            { cancelable: true }
        );
    }
    submitReservation() {
        console.log('Reserved!');
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.containerScrollView}>
            <View style={styles.container}>
                <Image
                    source={{ uri: this.state.pet.photo }}
                    style={styles.image}
                />
                <View style={styles.title}>
                    <Text style={styles.name}>{this.state.pet.name}</Text>
                    <Text style={styles.age}>{this.state.pet.age}</Text>
                </View>
                <View
                    style={{
                        top: 20,
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CED0CE",
                    }}
                />
                <View style={styles.subtitle}>
                    <Text style={styles.description}>{this.state.pet.description}</Text>
                </View>
                {this.state.thisGuyReserved ?
                    <View style={styles.reservation}>
                        <Button
                            onPress={this.changeState}
                            title={this.state.reserved ? 'YOU RESERVED THIS PET' : 'MAKE RESERVATION'}
                            buttonStyle={styles.button}
                        />
                    </View> :
                    <View style={styles.reservation}>
                        <Button
                            onPress={()=>{}}
                            title={'PET HAS BEEN ALREADY RESERVED'}
                            buttonStyle={styles.button}
                        />
                    </View>}
            </View>
            </ScrollView>
        )
    }
}
export default PetProfile;

const styles = StyleSheet.create({
    containerScrollView: {
        flex: 1,
        backgroundColor: '#fffecc',
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    image: {
        backgroundColor: '#0032ff',
        width: width,
        height: 300
    },
    title: {
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        left: 10,
        color: 'black',
        fontSize: 40,
        fontFamily: Fonts.FranklinGothic,
    },
    age: {
        right: 10,
        color: 'black',
        fontSize: 40,
        fontFamily: Fonts.FranklinGothic,
        alignSelf: 'flex-end'
    },
    subtitle: {
        top: 40,
        left: 10
    },
    description: {
        color: 'black',
        fontSize: 20,
        fontFamily: Fonts.FranklinGothic,
    },
    reservation: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    button: {
        bottom: 10,
        borderRadius: 50,
        //backgroundColor: this.state.reserved ? '#d15c69' : '#d02337'
    }
});