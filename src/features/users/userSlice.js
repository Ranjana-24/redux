import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },

    updateUser: (state, action) => {
      const user = state.find(
        (user) => user.id === action.payload.id
      );

      if (user) {
        user.name = action.payload.name;
        user.email = action.payload.email;
      }
    },

    deleteUser: (state, action) => {
      return state.filter(
        (user) => user.id !== action.payload.id
      );
    },
  },
});

export const {addUser, updateUser, deleteUser,} = userSlice.actions;

export default userSlice.reducer;