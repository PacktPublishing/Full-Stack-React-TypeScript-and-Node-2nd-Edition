import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./profile/ProfileSlice";
import NotificationReducer from "./notification/NotificationSlice";

const reducer = {
  profile: ProfileReducer,
  notificationIsOpen: NotificationReducer,
};

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
