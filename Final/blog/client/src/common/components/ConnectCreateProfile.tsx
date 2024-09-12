import { useEffect, useState, useTransition, use } from "react";
import { NotificationType } from "./modals/Notification";
import { ProfileForm } from "./ProfileForm";
import Notification from "./modals/Notification";
import { useUserProfile } from "../redux/profile/ProfileHooks";
import { UiApiContext } from "../context/ui-api/UiApiContext";

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
  const api = use(UiApiContext);

  useEffect(() => {
    handleConnect();
  }, [api]);

  const handleConnect = async () => {
    if (api) {
      startTransition(() => {
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
    }
  };

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
      notiType={NotificationType.Warning}
      isOpen={notificationState}
      toggleIsOpen={toggleNotificationState}
      width="25%"
      height={notificationHeight}
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
