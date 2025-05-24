import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./features/tracks/tracksSlice";

const store = configureStore({
    reducer: {
        tracks: tracksReducer 
    },
  })
  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store
