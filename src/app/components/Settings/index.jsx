import styles from "./Settings.module.scss";
import SettingsSidebar from "./SettingsSidebar";

const Settings = () => {
  return (
    <div>
      <SettingsSidebar className={styles.sidebar} />
    </div>
  );
};

export default Settings;
