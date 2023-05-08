import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
    name: 'showphotos',
    initialState: {
        photos: []
    },
    reducers: {
        SHOWPHOTOS(state, action) {
            const photo = action.payload;
            state.photos.push(photo);
        },
        DELETELAST(state) { state.photos.pop(); },
        DEIETEALL(state) { state.photos = []; }
    }
})

export const { SHOWPHOTOS, DELETELAST, DEIETEALL } = photoSlice.actions;
export default photoSlice.reducer;