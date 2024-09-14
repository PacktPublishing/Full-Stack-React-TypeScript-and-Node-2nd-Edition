import { ProfileModel } from "../../api/ui/ProfileModel";
import { useAppDispatch, useAppSelector } from "../StoreHooks";
import { setUserProfileSlice } from "./ProfileSlice";

export function useUserProfile(): [
  profile: ProfileModel | null,
  setProfile: (profile: ProfileModel | null) => void
] {
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const setProfile = (profile: ProfileModel | null) => {
    const action = setUserProfileSlice(profile);
    dispatch(action);
  };

  return [profile, setProfile];
}
