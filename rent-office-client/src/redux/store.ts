import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../redux/slice/citiesSlice";
import officesReducer from "../redux/slice/officesSlice";
import detailsCitiesReducer from "./slice/cityDetailsSlice";
import detailsOfficesReducer from "../redux/slice/officeDetailsSlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    offices: officesReducer,
    detailsCities: detailsCitiesReducer,
    detailsOffices: detailsOfficesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
