import * as remx from 'remx';
remx.registerLoggerForDebug(console.log);

// state
const initialState = {
    jwt: '',
    loaded: false,
    isShelter: false,
    reservationMade: false
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
    },
    getReservationMade() {
        return state.reservationMade;
    }
});

// setter
const setters = remx.setters({
    setJwt(value) {
        return state.jwt = value;
    },
    setLoad() {
        return state.loaded = true;
    },
    setIsShelter(value) {
        return state.isShelter = value;
    },
    setReservationMade(value) {
        console.log('SET');
        return state.reservationMade = value;
    }
});
export const store = {
    ...setters,
    ...getters
};
