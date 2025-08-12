import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Profile } from "../../api/net/profile/ProfileModels";

const initialState: Profile | null = null;

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setUserProfileSlice: (
      state: any,
      action: PayloadAction<Profile | null>
    ) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserProfileSlice } = profileSlice.actions;
export default profileSlice.reducer;
