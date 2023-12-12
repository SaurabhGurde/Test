import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  marks : 0
};


export const dataSlice = createSlice({
  name: 'marks',
  initialState,

  reducers: {
    
    addMarks: (state, action) => {
      state.marks = state.marks + action.payload;
    },
    resetMarks:(state, action)=>{
      state.marks = 0;
    }
   }
}
);

export const { addMarks, resetMarks  } = dataSlice.actions;



export default dataSlice.reducer;
