
import { configureStore } from "@reduxjs/toolkit";;
import setLocalStorage from "./local-storage";

import colorSlice from './slices/color-slice'
import counterSlice from "./slices/counter-slice";
import personSlice from "./slices/person-slice";

const preLoadedState = JSON.parse(window.localStorage.getItem("state") || '{}');

const store = configureStore({
  reducer: {
    count: counterSlice,
    person: personSlice,
    color: colorSlice,
  }, 
  preloadedState: preLoadedState,
  middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(), setLocalStorage]
})

export default store;
