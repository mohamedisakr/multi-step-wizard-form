import { createSlice } from "@reduxjs/toolkit";

const propertyTypeSlice = createSlice({
  name: "propertyTypeSlice",
  initialState: {
    propName: "",
    propType: "Flat", // Flat, Plot, Estab
  },
  reducers: {
    choosePropertyName: (state, action) => {
      state.propName = action.payload;
    },
    choosePropertyType: (state, action) => {
      state.propType = action.payload;
    },
  },
});

export const propertyTypeReducer = propertyTypeSlice.reducer;

export const { choosePropertyName, choosePropertyType } =
  propertyTypeSlice.actions;
