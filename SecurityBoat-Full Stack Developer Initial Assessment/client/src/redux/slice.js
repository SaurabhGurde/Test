import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

// export const incrementAsync = createAsyncThunk(
//   'data/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The data we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
    
 
    getUserData: (state, action) => {
      state.data = action.payload;
    },
  },


});

export const {  getUserData } = dataSlice.actions;



export default dataSlice.reducer;
