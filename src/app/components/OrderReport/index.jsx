import styles from "./OrderReport.module.scss";
import ErenJaegar from "../../../../public/users/profile/Eren Jaegar.png";
import ReinerBraun from "../../../../public/users/profile/Reiner Braunn.png";
import LeviAckerman from "../../../../public/users/profile/Levi Ackerman.png";
import HistoriaReiss from "../../../../public/users/profile/Historia Reiss.png";
import HanjiZoe from "../../../../public/users/profile/Hanji Zoe.png";
import OrderRow from "./OrderRow";
const orders = [
  {
    id: 1,
    customer: "Eren Jaegar",
    avatar: ErenJaegar,
    menu: "Spicy seasoned seafood noodles",
    total: "$125",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Reiner Braun",
    avatar: ReinerBraun,
    menu: "Salted Pasta with mushroom sauce",
    total: "$145",
    status: "Preparing",
  },
  {
    id: 3,
    customer: "Levi Ackerman",
    avatar: LeviAckerman,
    menu: "Beef dumpling in hot and sour soup",
    total: "$105",
    status: "Pending",
  },
  {
    id: 4,
    customer: "Historia Reiss",
    avatar: HistoriaReiss,
    menu: "Hot spicy fried rice with omelet",
    total: "$45",
    status: "Completed",
  },
  {
    id: 5,
    customer: "Hanji Zoe",
    avatar: HanjiZoe,
    menu: "Hot spicy fried rice with omelet",
    total: "$245",
    status: "Completed",
  },
];
const OrderReport = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Order Report</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col">Menu</th>
            <th scope="col">Total Payment</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderReport;
