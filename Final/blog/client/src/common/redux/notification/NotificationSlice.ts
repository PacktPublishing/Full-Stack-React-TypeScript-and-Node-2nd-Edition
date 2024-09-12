import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: false,
  reducers: {
    setNotificationSlice: (state: any, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setNotificationSlice } = notificationSlice.actions;
export default notificationSlice.reducer;
