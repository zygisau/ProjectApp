import React from 'react';
import { AsyncStorage } from 'react-native';
import { store } from '../../store';

const deviceStorage = {
    async saveItem(key, value) {
        //console.log("saveItem has been called");
        try {
            //console.log("AsyncStorage.setItem initializes");
            await AsyncStorage.setItem(key, value)
                .then(
                    //console.log("setJWT calls"),
                    store.setJwt(value)
                );
            //console.log("Parameters: " + key + '    ' + value);
        } catch (error) {
            console.log('Error from saveItem: ' + error.message);
        }
    },
    async loadJWT() {
        //console.log("loadJWT has been called");
        try {
            //console.log("AsyncStorage.getItem initializes");
            const value = await AsyncStorage.getItem('id_token');
            // console.log("AsyncStorage.getItem gathered its value (" + value + " )");
            // console.log("if statement initializes");
            if (value !== null) {
                // console.log("if TRUE scenario started");
                store.setJwt(value);
                // console.log("if TRUE scenario is over");
            } else {
                // console.log("if FALSE scenario started");
                store.setJwt('');
                // console.log("if FALSE scenario is over");
            }
            store.setLoad();
        } catch (error) {
            console.log('Error from loadJWT: ' + error.message);
        }
    },
    async deleteJWT() {
        try{
            await AsyncStorage.removeItem('id_token')
                .then(
                    store.setJwt('')
                );
        } catch (error) {
            console.log('Error from deleteJWT: ' + error.message);
        }
    },
    async saveIsShelter(key, value) {
        try {
            //console.log("saveIsShelter initializes");
            await AsyncStorage.setItem(key, JSON.stringify(value))
                .then(
                    //console.log("setIsShelter calls"),
                    store.setIsShelter(value)
                );
            //console.log("Parameters: " + key + '    ' + value);
        } catch (error) {
            console.log('Error from saveIsShelter: ' + error.message);
        }
    },
    async loadIsShelter() {
        //console.log("loadIsShelter has been called");
        try {
            //console.log("LoadIsShelter initializes");
            const value = await AsyncStorage.getItem('isShelter');
            //console.log("AsyncStorage.getItem gathered its value (" + value + " )");
            //console.log("if statement initializes");
            if (value !== null) {
                //console.log("if TRUE scenario started");
                store.setIsShelter(JSON.parse(value));
                //console.log("if TRUE scenario is over");
            } else {
                //console.log("if FALSE scenario started");
                store.setIsShelter(false);
                //console.log("if FALSE scenario is over");
            }
        } catch (error) {
            console.log('Error from loadIsShelter: ' + error.message);
        }
    },
    async deleteIsShelter() {
        try{
            await AsyncStorage.removeItem('isShelter')
                .then(
                    store.setIsShelter(false)
                );
        } catch (error) {
            console.log('Error from deleteIsShelter: ' + error.message);
        }
    },
};

export default deviceStorage;
