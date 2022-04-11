import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    firstName: "john",
    lastName: "doe",
    email: "johndoe@gmail.com",
    password: "password",
  },
  reducers: {
    chooseFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    chooseLastName: (state, action) => {
      state.lastName = action.payload;
    },
    chooseEmail: (state, action) => {
      state.email = action.payload;
    },
    choosePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const { chooseFirstName, choosePassword, chooseLastName, chooseEmail } =
  rootSlice.actions;
