import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

type iUserState = {
  data: {
    _id: string;
    name: string;
    email: string;
  } | null;
  isFetched: boolean;
};

const initialState: iUserState = {
  data: null,
  isFetched: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.isFetched = true;
    },
    setIsFetched: (state) => {
      state.isFetched = true;
    },
    logout: (state) => {
      state.data = null;
      localStorage.removeItem("token");
      toast.success("Logout successfull.");
    },
  },
});

export const { setUser, setIsFetched, logout } = userSlice.actions;

export default userSlice.reducer;
