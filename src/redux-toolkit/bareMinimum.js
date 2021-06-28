import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (prevState) => {
            prevState.value += 1;
        },
        decremented: (prevState) => {
            prevState.value -= 1;
        },
    },
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer },
});

const { incremented, decremented } = counterSlice.actions;

store.subscribe(() => console.log(store.getState()));

store.dispatch(incremented());
store.dispatch(incremented());
store.dispatch(decremented());
