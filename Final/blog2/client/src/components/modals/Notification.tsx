import { type CSSProperties, type ReactNode, useEffect, useState } from "react";
import BaseModal from "./Modal";

export type NotificationType = "Info" | "Warning" | "Error";

interface NotificationProps {
  title: string;
  notiType: NotificationType;
  isOpen: boolean;
  toggleIsOpen: () => void;
  style: CSSProperties;
  children: ReactNode;
}

export default function Notification({
  title,
  notiType,
  isOpen,
  toggleIsOpen,
  style,
  children,
}: NotificationProps) {
  const [titleColor, setTitleColor] = useState("var(--primary-cl)");

  useEffect(() => {
    if (notiType === "Error") {
      setTitleColor("var(--error-cl)");
    } else if (notiType === "Warning") {
      setTitleColor("var(--warning-cl)");
    } else {
      setTitleColor("var(--primary-cl)");
    }
  }, [notiType]);

  return (
    <BaseModal isOpen={isOpen} toggleOpen={toggleIsOpen}>
      <div className="noti-container" style={style}>
        <span className="title-font" style={{ color: titleColor }}>
          {title}
        </span>
        {children}
      </div>
    </BaseModal>
  );
}
