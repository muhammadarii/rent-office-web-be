import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from "../../types/type";
import apiClient from "../../services/apiService";

interface CityDetailsState {
  city: City | null;
  loading: boolean;
  error: string | null;
}

const initialState: CityDetailsState = {
  city: null,
  loading: false,
  error: null,
};

export const fetchCityDetailsBySlug = createAsyncThunk<City, string>(
  "cityDetails/fetchCityDetailsBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/city/${slug}`);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const cityDetailsSlice = createSlice({
  name: "cityDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityDetailsBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCityDetailsBySlug.fulfilled,
        (state, action: PayloadAction<City>) => {
          state.loading = false;
          state.city = action.payload;
        }
      )
      .addCase(fetchCityDetailsBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cityDetailsSlice.reducer;
