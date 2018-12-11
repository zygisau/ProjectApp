import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

// state
const initialState = {
    jwt: ''
};
const state = remx.state(initialState);

// getter
const getters = remx.getters({
    getJwt() {
        return state.jwt;
    }
});

// setter
const setters = remx.setters({
    setJwt(value) {
        return state.jwt = value;
    }

});
export const store = {
    ...setters,
    ...getters
};