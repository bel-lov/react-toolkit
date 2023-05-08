import { configureStore } from "@reduxjs/toolkit";
import factSlise from './facts';
import photoSlise from './images';

const store = configureStore({
    reducer: {
        showfacts: factSlise,
        showphotos: photoSlise
    }
})

export default store;