import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, getFilterData } from "./api";

const initialState = {
  data: [],
  loading:false
};

export const getDataAsync = createAsyncThunk("data/getData", async () => {
  try {
    const response = await getData();
    return response;
  } catch (error) {
    throw error;
  }
});

export const getFilterDataAsync = createAsyncThunk("data/getFilterData", async (filter) => {
  try {
    const response = await getFilterData(filter);
    return response;
  } catch (error) {
    throw error;
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getDataAsync.pending, (state) => {
      state.loading=true
    }).addCase(getDataAsync.fulfilled, (state, action) => {
      state.loading=false
      state.data = action.payload;
    }).addCase(getFilterDataAsync.pending, (state) => {
      state.loading=true
    }).addCase(getFilterDataAsync.fulfilled, (state, action) => {
      state.loading=false
      state.data = action.payload;
    });
  },
});

//export const { getData  } = dataSlice.actions;

export default dataSlice.reducer;
