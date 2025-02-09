"use client";
import { useParams } from "next/navigation";
import styles from "./OrderDetails.module.scss";
import Image from "next/image";
import ErenJaegar from "../../../../public/users/profile/Eren Jaegar.png";
import ReinerBraun from "../../../../public/users/profile/Reiner Braunn.png";
import LeviAckerman from "../../../../public/users/profile/Levi Ackerman.png";
import HistoriaReiss from "../../../../public/users/profile/Historia Reiss.png";
import HanjiZoe from "../../../../public/users/profile/Hanji Zoe.png";
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
const OrderDetails = () => {
  const params = useParams();
  const id = params.id;
  const order = orders.find((order) => order.id === parseInt(id));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Order Details</h2>
      <div className={styles.orderDetails}>
        <div className={styles.customerInfo}>
          <Image src={order.avatar} alt={order.customer} />
          <h3>{order.customer}</h3>
        </div>
        <p>Menu: {order.menu}</p>
        <p>Total: {order.total}</p>
        <p>Status: {order.status}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
