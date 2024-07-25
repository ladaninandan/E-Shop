// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice'
import motorolaMobilesReducer from './MotorolaSlice';

const store = configureStore({
    reducer: {
        product: productReducer.reducer,
        cart: cartReducer.reducer,
        motorolaMobiles: motorolaMobilesReducer.reducer,
    },
});

export default store;