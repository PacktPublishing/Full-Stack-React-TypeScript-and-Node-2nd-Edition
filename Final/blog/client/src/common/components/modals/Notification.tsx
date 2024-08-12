import { ReactNode, useEffect, useState } from "react";
import BaseModal from "./BaseModal";

export enum NotificationType {
  Info,
  Warning,
  Error,
}

interface NotificationProps {
  title: string;
  notiType: NotificationType;
  isOpen: boolean;
  toggleIsOpen: () => void;
  width: string;
  height: string;
  children: ReactNode;
}

export default function Notification({
  title,
  notiType,
  isOpen,
  toggleIsOpen,
  width,
  height,
  children,
}: NotificationProps) {
  const [titleColor, setTitleColor] = useState("var(--primary-cl)");

  useEffect(() => {
    if (notiType === NotificationType.Error) {
      setTitleColor("var(--error-cl)");
    } else if (notiType === NotificationType.Warning) {
      setTitleColor("var(--warning-cl)");
    } else {
      setTitleColor("var(--primary-cl)");
    }
  }, [notiType]);

  return (
    <BaseModal
      isOpen={isOpen}
      toggleOpen={toggleIsOpen}
      width={width}
      height={height}
    >
      <div className="noti-container">
        <span className="title-font" style={{ color: titleColor }}>
          {title}
        </span>
        {children}
      </div>
    </BaseModal>
  );
}
