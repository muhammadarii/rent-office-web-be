import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../services/apiService";

interface OfficesState {
  offices: any[];
  loading: boolean;
  error: string | null;
}

const initialState: OfficesState = {
  offices: [],
  loading: false,
  error: null,
};

export const fetchOffices = createAsyncThunk(
  "offices/fetchOffices",
  async () => {
    const response = await apiClient.get("/offices");
    return response.data.data;
  }
);

const officesSlice = createSlice({
  name: "offices",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchOffices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffices.fulfilled, (state, action) => {
        state.loading = false;
        state.offices = action.payload;
      })
      .addCase(fetchOffices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch offices";
      });
  },
});

export default officesSlice.reducer;
