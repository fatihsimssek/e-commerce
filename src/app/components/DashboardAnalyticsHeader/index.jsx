import styles from "./DashboardAnalyticsHeader.module.scss";
import DolarIcon from "../../../../public/dashboard/icons/DolarIcon.svg";
import TotalIcon from "../../../../public/dashboard/icons/TotalIcon.svg";
import CustomerIcon from "../../../../public/dashboard/icons/CustomerIcon.svg";
import { RevenueItem } from "../RevenuItemAnalytics";
import OrderReport from "../OrderReport";

const DashboardAnalyticsHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.analytics}>
        <RevenueItem
          icon={DolarIcon}
          amount="$ 1,234.00"
          title="Total Revenue"
          percentage="+32.40%"
          isPositive={true}
        />
        <RevenueItem
          icon={TotalIcon}
          amount="23,456"
          title="Total Dish Ordered"
          percentage="-12.40%"
          isPositive={false}
        />
        <RevenueItem
          icon={CustomerIcon}
          amount="1,234"
          title="Total Customers"
          percentage="+2.40%"
          isPositive={true}
        />
      </div>
      <OrderReport />
    </div>
  );
};

export default DashboardAnalyticsHeader;
