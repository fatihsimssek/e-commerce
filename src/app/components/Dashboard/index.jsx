import DashboardAnalyticsHeader from "../DashboardAnalyticsHeader";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <div className={styles.title}>Dashboard</div>
          <div className={styles.subtitle}>{date.toDateString()}</div>
        </div>
      </div>
      <div className={styles.line}></div>
      <DashboardAnalyticsHeader className={styles.analyticsHeader} />
    </div>
  );
};

export default Dashboard;
