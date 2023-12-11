import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    currentSong: null,
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    clearCurrentSong: (state, action) => {
      state.currentSong = null;
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});

const startingState = store.getState();

console.log("Starting State:");
console.log(startingState);

const finalState = store.getState();
console.log(finalState);

export default store;
export const { setCurrentSong } = songSlice.actions;
