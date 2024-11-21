import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Office } from "../../types/type";
import apiClient from "../../services/apiService";

interface OfficeDetailsState {
  office: Office | null;
  loading: boolean;
  error: string | null;
}

const initialState: OfficeDetailsState = {
  office: null,
  loading: false,
  error: null,
};

export const fetchOfficeDetailsBySlug = createAsyncThunk<Office, string>(
  "officeDetails/fetchOfficeDetailsBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/office/${slug}`);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const officeDetailsSlice = createSlice({
  name: "officeDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfficeDetailsBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOfficeDetailsBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.office = action.payload;
      })
      .addCase(fetchOfficeDetailsBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default officeDetailsSlice.reducer;
