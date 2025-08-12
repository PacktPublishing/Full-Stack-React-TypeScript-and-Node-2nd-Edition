import { useState, useTransition, use, useCallback } from "react";
import { ProfileForm } from "./ProfileForm";
import Notification from "./modals/Notification";
import { useUserProfile } from "../lib/redux/profile/ProfileHooks";

export const SMALL_NOTIFICATION_HEIGHT = "170px";
export const LARGE_NOTIFICATION_HEIGHT = "580px";

interface ConnectCreateProfileProps {
  notificationState: boolean;
  toggleNotificationState: () => void;
}

export function ConnectCreateProfile({
  notificationState,
  toggleNotificationState,
}: ConnectCreateProfileProps) {
  const [profile, setProfile] = useUserProfile();
  const [notificationHeight, setNotificationHeight] = useState(
    SMALL_NOTIFICATION_HEIGHT
  );
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [connectValidationMsg, setConnectValidationMsg] = useState("");
  const [_isPending, startTransition] = useTransition();

  const handleConnect = useCallback(async () => {
    startTransition(async () => {
      if (!profile) {
        setShowProfileForm(true);
        setNotificationHeight(LARGE_NOTIFICATION_HEIGHT);
        setConnectValidationMsg(
          "You must create a profile before you can create content"
        );
      } else {
        // if profile already exists just allow writing
        toggleNotificationState();
        setProfile({
          id: profile.id,
          updatedAt: profile.updatedAt,
          userName: profile.userName,
          fullName: profile.fullName,
          description: profile.description,
          socialLinkPrimary: profile.socialLinkPrimary || "",
          socialLinkSecond: profile.socialLinkSecond || "",
        });
        setShowProfileForm(false);
        setNotificationHeight(SMALL_NOTIFICATION_HEIGHT);
        setConnectValidationMsg("");
      }
    });
  }, [profile, toggleNotificationState]);
  use(handleConnect());

  // const afterConnect = async (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   setConnectValidationMsg("Waiting for wallet connection ...");
  // };

  // const afterDisconnect = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   toggleNotificationState();
  //   setProfile(null);
  //   setShowProfileForm(false);
  //   setNotificationHeight(SMALL_NOTIFICATION_HEIGHT);
  //   setConnectValidationMsg("");
  // };

  return (
    <Notification
      title="Notification"
      notiType={"Warning"}
      isOpen={notificationState}
      toggleIsOpen={toggleNotificationState}
      style={{ width: "25%", height: notificationHeight }}
    >
      <div className="push-away">
        <span className="btn-span-align" style={{ marginTop: "1em" }}>
          <div style={{ color: "var(--warning-cl)" }}>
            {connectValidationMsg}
          </div>
        </span>
        {showProfileForm ? (
          <div className="profile-form-parent">
            <ProfileForm profileCreatedCallback={toggleNotificationState} />
          </div>
        ) : null}
      </div>
    </Notification>
  );
}
