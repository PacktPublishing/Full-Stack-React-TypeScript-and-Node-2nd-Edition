import { useAppDispatch, useAppSelector } from "../StoreHooks";
import { setNotificationSlice } from "./NotificationSlice";

export function useNotification(): [
  notificationIsOpen: boolean,
  setNotification: (isOpen: boolean) => void
] {
  const notificationIsOpen = useAppSelector(
    (state) => state.notificationIsOpen
  );
  const dispatch = useAppDispatch();

  const setNotification = (isOpen: boolean) => {
    const action = setNotificationSlice(isOpen);
    dispatch(action);
  };

  return [notificationIsOpen, setNotification];
}
