import { configureStore } from "@reduxjs/toolkit";
import { propertyTypeReducer } from "./propertyTypeSlice";
import { reducer } from "./rootSlice";

export const store = configureStore({
  reducer: { reducer, propertyTypeReducer },
});
