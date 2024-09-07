import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./profile/ProfileSlice";

const reducer = {
  profile: ProfileReducer,
};

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
