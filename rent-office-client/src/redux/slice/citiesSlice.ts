import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/apiService";
import { City } from "../../types/type";

interface CitiesState {
  cities: City[];
  loading: boolean;
  error: string | null;
}

const initialState: CitiesState = {
  cities: [],
  loading: false,
  error: null,
};

export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
  const response = await apiClient.get("/cities");
  return response.data.data;
});

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cities";
      });
  },
});

export default citiesSlice.reducer;
