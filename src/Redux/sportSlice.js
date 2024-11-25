import { createSlice } from "@reduxjs/toolkit";

export const sportSlice = createSlice({
  name: "sportSlice",
  initialState: {
    sport: 'كرة القدم',
    
  },
  reducers: {
    handleChangeSport: (state) => {
      state.sport =state.sport=='كرة القدم'?'كرة السلة':'كرة القدم';
      console.log(state.sport);
    },
  },
});

export const {  handleChangeSport} = sportSlice.actions;
export default sportSlice.reducer;
