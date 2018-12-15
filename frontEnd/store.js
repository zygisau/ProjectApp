import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

// state
const initialState = {
    jwt: '',
    loaded: false
};
const state = remx.state(initialState);

// getter
const getters = remx.getters({
    getJwt() {
        return state.jwt;
    },
    getLoad() {
        return state.loaded;
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
    }

});
export const store = {
    ...setters,
    ...getters
};