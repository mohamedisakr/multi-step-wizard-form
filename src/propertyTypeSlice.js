import { createSlice } from "@reduxjs/toolkit";

const propertyTypeSlice = createSlice({
  name: "propertyTypeSlice",
  initialState: {
    propName: "",
    propType: "Flat", // Flat, Plot, Estab
    roomConfig: "1BHK", // 1BHK, 2BHK, 3BHK
  },
  reducers: {
    choosePropertyName: (state, action) => {
      state.propName = action.payload;
    },
    choosePropertyType: (state, action) => {
      state.propType = action.payload;
    },
    chooseRoomConfig: (state, action) => {
      state.roomConfig = action.payload;
    },
  },
});

export const propertyTypeReducer = propertyTypeSlice.reducer;

export const { choosePropertyName, choosePropertyType, chooseRoomConfig } =
  propertyTypeSlice.actions;
