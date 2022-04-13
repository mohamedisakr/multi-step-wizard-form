import { createSlice } from "@reduxjs/toolkit";

const propertyTypeSlice = createSlice({
  name: "propertyTypeSlice",
  initialState: {
    propType: "Flat", // Flat, Plot, Estab
  },
  reducers: {
    choosePropertyType: (state, action) => {
      state.propType = action.payload;
    },
  },
});

export const propertyTypeReducer = propertyTypeSlice.reducer;

export const { choosePropertyType } = propertyTypeSlice.actions;
