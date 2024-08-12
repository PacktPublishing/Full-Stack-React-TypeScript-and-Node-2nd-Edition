import { useEffect, useState, useTransition, MouseEvent } from "react";
import { NotificationType } from "./modals/Notification";
import { ProfileForm } from "./ProfileForm";
import Notification from "./modals/Notification";
import { useProfile } from "../redux/Store";
import { useWallet } from "../context/SolflareContext";
import { useUiApi } from "../context/UiApiContext";

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
  const profile = useProfile((state) => state.profile);
  const setProfile = useProfile((state) => state.setProfile);
  const [notificationHeight, setNotificationHeight] = useState(
    SMALL_NOTIFICATION_HEIGHT
  );
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [connectValidationMsg, setConnectValidationMsg] = useState("");
  const [_isPending, startTransition] = useTransition();
  const walletState = useWallet();
  const api = useUiApi();

  useEffect(() => {
    handleConnect();
  }, [api, walletState]);

  const handleConnect = async () => {
    if (api) {
      startTransition(() => {
        if (!profile) {
          if (!walletState?.walletObject?.isConnected) {
            return;
          }
          api.getOwnersProfile().then((ownersProfile) => {
            if (!ownersProfile) {
              setShowProfileForm(true);
              setNotificationHeight(LARGE_NOTIFICATION_HEIGHT);
              setConnectValidationMsg(
                "You must create a profile before you can create content"
              );
            } else {
              // if profile already exists just allow writing
              toggleNotificationState();
              setProfile({
                id: ownersProfile?.id,
                updatedAt: ownersProfile.updatedAt,
                username: ownersProfile.userName,
                fullname: ownersProfile.fullName,
                description: ownersProfile.description,
                ownerAddress: ownersProfile.ownerAddress,
                socialLinkPrimary: ownersProfile.socialLinkPrimary || "",
                socialLinkSecond: ownersProfile.socialLinkSecond || "",
              });
              setShowProfileForm(false);
              setNotificationHeight(SMALL_NOTIFICATION_HEIGHT);
              setConnectValidationMsg("");
            }
          });
        }
      });
    }
  };

  const afterConnect = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setConnectValidationMsg("Waiting for wallet connection ...");
    await walletState?.walletObject?.wallet.connect();
  };

  const afterDisconnect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    api?.disconnect();
    toggleNotificationState();
    setProfile(null);
    setShowProfileForm(false);
    setNotificationHeight(SMALL_NOTIFICATION_HEIGHT);
    setConnectValidationMsg("");
  };

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
        <span className="standard-header">
          {walletState?.walletObject?.wallet?.connected ? null : (
            <span>Please connect your wallet</span>
          )}
        </span>
        <span className="btn-span-align" style={{ marginTop: "1em" }}>
          <div style={{ color: "var(--warning-cl)" }}>
            {connectValidationMsg}
          </div>
          {walletState?.walletObject?.wallet?.connected ? (
            <button className="primary-btn" onClick={afterDisconnect}>
              Disconnect
            </button>
          ) : (
            <button className="primary-btn" onClick={afterConnect}>
              Connect
            </button>
          )}
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
