"use client";
import Image from "next/image";
import styles from "./../OrderReport.module.scss";

const OrderRow = ({ order }) => (
  <tr>
    <td className={styles.customerInfo}>
      <Image
        alt={`Avatar of ${order.customer}`}
        className={styles.avatar}
        height="40"
        src={order.avatar}
        width="40"
        onError={(e) => {
          e.target.onerror = null;
        }}
      />
      {order.customer}
    </td>
    <td>{order.menu}</td>
    <td>{order.total}</td>
    <td>
      <span
        className={styles[order.status.toLowerCase()] || styles.defaultStatus}
      >
        {order.status}
      </span>
    </td>
  </tr>
);

export default OrderRow;
