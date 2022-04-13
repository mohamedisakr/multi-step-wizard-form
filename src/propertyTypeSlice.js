import { createSlice } from "@reduxjs/toolkit";

const propertyTypeSlice = createSlice({
  name: "propertyTypeSlice",
  initialState: {
    propType: "Flat", // Flat, Plot, Estab
  },
  reducers: {
    choosepropertyType: (state, action) => {
      state.propType = action.payload;
    },
  },
});

export const propertyTypeReducer = propertyTypeSlice.reducer;

export const { chooseFirstName } = propertyTypeSlice.actions;
