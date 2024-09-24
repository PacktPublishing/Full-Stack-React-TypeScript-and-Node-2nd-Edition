import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Profile = {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  description: string;
} | null;

const initialState: Profile = null;

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfileSlice: (state: any, action: PayloadAction<Profile>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setProfileSlice } = profileSlice.actions;
export default profileSlice.reducer;
