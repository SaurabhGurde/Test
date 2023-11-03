import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "./api";

const initialState = {
  data: {},
  loading: undefined,
  codeError: undefined,
};

export const getDataAsync = createAsyncThunk(
  "data/getData",
  async ({ code }) => {
    console.log("code", code);
    try {
      const response = await getData(code);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {
    removeData: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.codeError = false;
        state.data = {};
        state.loading = true;
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        if (action.payload && action.payload["post code"]) {
          state.loading = false;
          state.data = action.payload;
          state.codeError = false;
        } else {
          state.loading = false;
          state.data = action.payload;
          state.codeError = true;
        }
      })
      .addCase(getDataAsync.rejected, (state) => {
        state.loading = false;
        alert("server Error");
      });
  },
});

export const { removeData } = dataSlice.actions;
export default dataSlice.reducer;
