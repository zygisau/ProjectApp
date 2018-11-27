import React from 'react';
import { AsyncStorage } from 'react-native';
import {newJWT} from "../../App"

const deviceStorage = {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
                .then(
                    newJWT(value)
                );
            console.log(key + '    ' + value);
        } catch (error) {
            console.log('Error from saveItem: ' + error.message);
        }
    },
    async loadJWT() {
        try {
            const value = await AsyncStorage.getItem('id_token');
            if (value !== null) {
                newJWT(value)
            } else {
                newJWT("")
            }
        } catch (error) {
            console.log('Error from loadJWT: ' + error.message);
        }
    },
    async deleteJWT() {
        try{
            await AsyncStorage.removeItem('id_token')
                .then(
                    newJWT("")
                );
        } catch (error) {
            console.log('Error from deleteJWT: ' + error.message);
        }
    }
};

export default deviceStorage;