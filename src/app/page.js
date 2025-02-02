import styles from "./page.module.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
}
