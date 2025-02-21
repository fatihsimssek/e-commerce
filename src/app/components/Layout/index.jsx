import Settings from "../Settings";
import SettingsSidebar from "../Settings/SettingsSidebar";
import Sidebar from "../Sidebar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar className={styles.sidebar} />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
