import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileModel } from "../../api/ui/ProfileModel";

const initialState: ProfileModel | null = null;

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setUserProfileSlice: (
      state: any,
      action: PayloadAction<ProfileModel | null>
    ) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserProfileSlice } = profileSlice.actions;
export default profileSlice.reducer;
