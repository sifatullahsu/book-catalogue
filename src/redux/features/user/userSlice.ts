import { createSlice } from "@reduxjs/toolkit";

type iUserState = {
  data: {
    _id: string;
    name: string;
    email: string;
  } | null;
};

const initialState: iUserState = {
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
