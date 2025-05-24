import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "~/store";
import type { Track } from "./track";

interface TracksState { 
    tracks: Track[]
}

const initialState: TracksState = {
    tracks: []
}

export const tracksSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {
        fetchTracksSuccess: (state, action: PayloadAction<Track[]>) => {
          state.tracks = action.payload   
        },
        addTrack: (state, action: PayloadAction<Track>) => {
            state.tracks.push(action.payload)
        }
    }
})

export const { addTrack, fetchTracksSuccess  } = tracksSlice.actions

export const selectTracks = (state: RootState) => state.tracks.tracks

export default tracksSlice.reducer