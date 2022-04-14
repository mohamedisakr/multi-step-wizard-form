import { createSlice } from "@reduxjs/toolkit";

const propertyTypeSlice = createSlice({
  name: "propertyTypeSlice",
  initialState: {
    propName: "",
    propType: "Flat", // Flat, Plot, Estab
    roomConfig: "1BHK", // 1BHK, 2BHK, 3BHK
    floorNumber: "",
    facingType: "", // North, North-East, East, South-East, South, South-West, West, North-West
    builtupArea: "",
    rentOrSale: "Rent", // Rent, Sale
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
    chooseFloorNumber: (state, action) => {
      state.floorNumber = action.payload;
    },
    chooseFacingType: (state, action) => {
      state.facingType = action.payload;
    },
    chooseBuiltupArea: (state, action) => {
      state.builtupArea = action.payload;
    },
    chooseRentOrSale: (state, action) => {
      state.rentOrSale = action.payload;
    },
  },
});

export const propertyTypeReducer = propertyTypeSlice.reducer;

export const {
  choosePropertyName,
  choosePropertyType,
  chooseRoomConfig,
  chooseFloorNumber,
} = propertyTypeSlice.actions;
