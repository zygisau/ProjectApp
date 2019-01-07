import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

// state
const initialState = {
    jwt: '',
    loaded: false,
    isShelter: false
};
const state = remx.state(initialState);

// getter
const getters = remx.getters({
    getJwt() {
        return state.jwt;
    },
    getLoad() {
        return state.loaded;
    },
    getIsShelter() {
        return state.isShelter;
    }
});

// setter
const setters = remx.setters({
    setJwt(value) {
        return state.jwt = value;
    },
    setLoad() {
        // if (state.loaded === false) {
        //     return state.setState ( {loaded:true});
        // }
        // else return state.setState ( {loaded:false});
        return state.loaded = true;
    },
    setIsShelter(value) {
        return state.isShelter = value;
    }

});
export const store = {
    ...setters,
    ...getters
};