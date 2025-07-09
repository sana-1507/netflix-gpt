import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers : {
        toggleGPTSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGPTMovieResult: (state, action) => {
            const {movieNames, movieResults } = action.payload;
            state.movieResults = movieResults
            state.movieNames = movieNames
        }
    }
})

export const { toggleGPTSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;