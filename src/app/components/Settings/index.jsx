"use client";
import { useState } from "react";
import styles from "./Settings.module.scss";
import SettingsSidebar from "./SettingsSidebar";

const Settings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  if (isSettingsOpen) {
    return null;
  }
  return (
    !isSettingsOpen && (
      <div>
        <SettingsSidebar className={styles.sidebar} />
      </div>
    )
  );
};

export default Settings;
