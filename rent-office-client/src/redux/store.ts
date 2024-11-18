import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../redux/slice/citiesSlice";
import officesReducer from "../redux/slice/officesSlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    offices: officesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
