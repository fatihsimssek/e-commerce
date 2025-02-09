"use client";
import Image from "next/image";
import styles from "./../OrderReport.module.scss";
import Link from "next/link";

const OrderRow = ({ order }) => (
  <tr className={styles.row}>
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
    <td className={styles.menu}>
      <Link href={`/order/${order.id}`}>{order.menu}</Link>
    </td>
    <td>{order.total}</td>
    <td>
      <span className={styles[order.status.toLowerCase()]}>{order.status}</span>
    </td>
  </tr>
);

export default OrderRow;
