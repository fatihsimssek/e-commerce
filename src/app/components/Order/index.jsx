import React from "react";
import Image from "next/image";
import Beef from "../../../../public/dishes/beef-dumpling.png";
import Noodle from "../../../../public/dishes/noodle.png";
import Omlette from "../../../../public/dishes/ommlette.png";
import Pasta from "../../../../public/dishes/spicy-pasta.png";
import styles from "./Order.module.scss";

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Orders #34562</h1>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.active}`}>
            Dine In
          </button>
          <button className={`${styles.button} ${styles.inactive}`}>
            To Go
          </button>
          <button className={`${styles.button} ${styles.inactive}`}>
            Delivery
          </button>
        </div>
        <div className={styles.orderHeader}>
          <p>Item</p>
          <div className={styles.quantity}>
            <p>Qty</p>
            <p>Price</p>
          </div>
        </div>
      </div>
      <div className={styles.orderList}>
        <div className={styles.orderItem}>
          <Image
            alt="Spicy seasoned seafood noodles"
            height={40}
            src={Noodle}
            width={40}
          />
          <div className={styles.orderDetails}>
            <h2>Spicy seasoned sea...</h2>
            <p>$ 2.29</p>
            <input
              className={styles.orderNote}
              type="text"
              defaultValue="Please, just a little bit spicy only."
            />
          </div>
          <div className={styles.orderQty}>
            <input type="text" defaultValue="2" />
            <span className={styles.orderPrice}>$ 4.58</span>
            <i
              className={`${styles.fas} ${styles.faTrash} ${styles.orderDelete}`}
            ></i>
          </div>
        </div>
        <div className={styles.orderItem}>
          <Image
            alt="Salted pasta with mushroom sauce"
            height={40}
            src={Pasta}
            width={40}
          />
          <div className={styles.orderDetails}>
            <h2>Salted pasta with mu...</h2>
            <p>$ 2.69</p>
            <input
              className={styles.orderNote}
              placeholder="Order Note..."
              type="text"
            />
          </div>
          <div className={styles.orderQty}>
            <input type="text" defaultValue="1" />
            <span className={styles.orderPrice}>$ 2.69</span>
            <i
              className={`${styles.fas} ${styles.faTrash} ${styles.orderDelete}`}
            ></i>
          </div>
        </div>
        <div className={styles.orderItem}>
          <Image
            alt="Spicy instant noodles"
            height={40}
            src={Beef}
            width={40}
          />
          <div className={styles.orderDetails}>
            <h2>Spicy instant noodle...</h2>
            <p>$ 3.49</p>
            <input
              className={styles.orderNote}
              placeholder="Order Note..."
              type="text"
            />
          </div>
          <div className={styles.orderQty}>
            <input type="text" defaultValue="3" />
            <span className={styles.orderPrice}>$ 10.47</span>
            <i
              className={`${styles.fas} ${styles.faTrash} ${styles.orderDelete}`}
            ></i>
          </div>
        </div>
        <div className={styles.orderItem}>
          <Image
            alt="Healthy noodle with spinach leaf"
            height={40}
            src={Omlette}
            width={40}
          />
          <div className={styles.orderDetails}>
            <h2>Healthy noodle with ...</h2>
            <p>$ 3.29</p>
            <input
              className={styles.orderNote}
              placeholder="Order Note..."
              type="text"
            />
          </div>
          <div className={styles.orderQty}>
            <input type="text" defaultValue="1" />
            <span className={styles.orderPrice}>$ 3.29</span>
            <i
              className={`${styles.fas} ${styles.faTrash} ${styles.orderDelete}`}
            ></i>
          </div>
        </div>
      </div>
      <div className={styles.summary}>
        <p>Discount</p>
        <p>$0</p>
      </div>
      <div className={styles.summary}>
        <p className={styles.total}>Sub total</p>
        <p className={styles.total}>$ 21.03</p>
      </div>
      <button className={styles.paymentButton}>Continue to Payment</button>
    </div>
  );
};

export default Order;
