import { createStore } from 'redux';

/**
 * Reducer is a oparator function.
 * It is provided with 2 arguments
 *  1) state - current state of app
 *  2) action - who has triggered this reducer
 */
const counterReducer = (state = {}, action) => {
    console.log(state, action);

    return state;
};

/**
 * store handles the overall state of the app
 * createStore returns { subscribe, dispatch, getState, replaceReducer }
 */
const store = createStore(counterReducer);

/**
 * if there is changes in state subscribe callback get's triggered
 * Note: no parmas are passes, we have to call store.getState() for lastest
 * state
 *  */
store.subscribe((...rest) => {
    console.log(rest, store.getState());
});

store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/decremented' });
