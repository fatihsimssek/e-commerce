import styles from "./RevenueItemAnalytics.module.scss";
import UpIcon from "../../../../public/dashboard/icons/UpIcon.svg";
import DownIcon from "../../../../public/dashboard/icons/DownIcon.svg";

export const RevenueItem = ({
  icon: Icon,
  amount,
  title,
  percentage,
  isPositive,
}) => {
  return (
    <div className={styles.revenue}>
      <div className={styles.revenueTitle}>
        <div className={styles.subtitle}>
          <Icon />
          <p className={isPositive ? styles.perc : styles.percDown}>
            {percentage}
          </p>
          {isPositive ? <UpIcon /> : <DownIcon />}
        </div>
        <div className={styles.totalRevenue}>
          <p className={styles.amount}>{amount}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};
