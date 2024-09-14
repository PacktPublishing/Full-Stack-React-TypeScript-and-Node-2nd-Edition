import { ReactNode } from "react";
import profileIcon from "../../theme/assets/profiles/mrglasses.jpg"; // todo: replace with user avatar when ready
import { NavAnchor } from "./NavAnchor";
import { ConnectCreateProfile } from "./ConnectCreateProfile";
import { useNotification } from "../redux/notification/NotificationHooks";
import { Link } from "react-router-dom";
import { useUserProfile } from "../redux/profile/ProfileHooks";

export interface LayoutProps {
  children: ReactNode;
}

/** todo: add button for editable modal **/
export function Layout({ children }: LayoutProps) {
  const [profile] = useUserProfile();
  const [notificationIsOpen, setNotificationIsOpen] = useNotification();

  const toggleNotificationState = () => {
    setNotificationIsOpen(!notificationIsOpen);
  };

  return (
    <div className="layout-container">
      <nav className="layout-nav">
        <a href="/" className="layout-title">
          My Blog
        </a>
        <span className="layout-links">
          <NavAnchor path="/write/new" label="WRITE" />
          <NavAnchor path="/read/followed" label="READ" />
          <NavAnchor path="/explorer" label="EXPLORE" />
        </span>
        <span style={{ display: "flex", alignItems: "center" }}>
          {profile ? (
            <Link to={`/profile/${profile.id}`}>
              <img src={profileIcon} className="profile-avatar" />
            </Link>
          ) : (
            <>
              <ConnectCreateProfile
                notificationState={notificationIsOpen}
                toggleNotificationState={toggleNotificationState}
              />
            </>
          )}
        </span>
      </nav>
      {children}
    </div>
  );
}
