import React, { useEffect } from 'react';
import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconX,
} from "@tabler/icons-react";

const toastIcons = {
  success: {
    icon: <IconCircleCheckFilled />,
    iconClass: "success-icon",
    progressBarClass: "success",
  },
  warning: {
    icon: <IconAlertCircleFilled />,
    iconClass: "warning-icon",
    progressBarClass: "warning",
  },
  info: {
    icon: <IconInfoCircleFilled />,
    iconClass: "info-icon",
    progressBarClass: "info",
  },
  error: {
    icon: <IconCircleXFilled />,
    iconClass: "error-icon",
    progressBarClass: "error",
  },
};

const Toast = ({ message, type, id, onDelete }) => {
  const { icon, iconClass } = toastIcons[type];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onDelete(id);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [id, onDelete]);

  return (
    <div className="toast">
      <span className={iconClass}>{icon}</span>
      <p className="toast-message">{message}</p>
      <button className="dismiss-btn" onClick={() => onDelete(id)}>
        <IconX size={18} color="#aeb0d7" />
      </button>
    </div>
  );
};

export default Toast;