import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: moviesReducer,
        gpt: gptReducer
    },
     devTools: true, 
});

export default appStore;