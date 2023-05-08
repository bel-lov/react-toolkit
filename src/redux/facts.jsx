import { createSlice } from '@reduxjs/toolkit';
import { list } from '../data/data';

const factSlice = createSlice({
    name: 'showfacts',
    initialState: {
        facts: []
    },
    reducers: {
        SHOWFACTS(state, action) {
            const quantity = action.payload;
            state.facts = list.filter((el) => list.indexOf(el) <= quantity);
            return state;
        }
    }
})

export const { SHOWFACTS } = factSlice.actions;
export default factSlice.reducer;