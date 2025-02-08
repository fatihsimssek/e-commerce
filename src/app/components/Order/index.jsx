"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Trash from "../../../../public/icons/Trash.svg";
import styles from "./Order.module.scss";

const Order = ({
  handleDeleteItem,
  orderedDishes,
  setOrderedDishes,
  orderType,
  orderNumber,
}) => {
  const [activeTab, setActiveTab] = useState(orderType);
  const [notes, setNotes] = useState("");
  const discount = 0;

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleQuantityChange = (dishId, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedOrderedDishes = orderedDishes.map((item) =>
      item.id === dishId ? { ...item, quantity: newQuantity } : item
    );

    setOrderedDishes(updatedOrderedDishes);
    localStorage.setItem("orderedDishes", JSON.stringify(updatedOrderedDishes));
  };
  const calculateSubtotal = () => {
    return orderedDishes
      .reduce((total, dish) => {
        return total + dish.price * dish.quantity;
      }, 0)
      .toFixed(2);
  };

  const calculateDiscountedTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * (discount / 100)).toFixed(2);
    return (subtotal - discountAmount).toFixed(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Orders #{orderNumber}</h1>
        <div className={styles.buttons}>
          <button
            onClick={() => handleTabChange("dineIn")}
            className={
              activeTab === "dineIn"
                ? `${styles.button} ${styles.active}`
                : `${styles.button} ${styles.inactive}`
            }
            aria-label="Dine In"
          >
            Dine In
          </button>
          <button
            onClick={() => handleTabChange("toGo")}
            className={
              activeTab === "toGo"
                ? `${styles.button} ${styles.active}`
                : `${styles.button} ${styles.inactive}`
            }
            aria-label="To Go"
          >
            To Go
          </button>
          <button
            onClick={() => handleTabChange("delivery")}
            className={
              activeTab === "delivery"
                ? `${styles.button} ${styles.active}`
                : `${styles.button} ${styles.inactive}`
            }
            aria-label="Delivery"
          >
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
        {orderedDishes.map((dish) => (
          <div key={dish.id} className={styles.orderItem}>
            <div className={styles.orderDetails}>
              <div className={styles.orderTitle}>
                <div className={styles.orderHeader}>
                  <Image
                    className={styles.orderImage}
                    alt={dish.name}
                    height={40}
                    src={dish.image}
                    width={40}
                  />
                  <div className={styles.orderSubtitle}>
                    <h2 className={styles.orderName}>
                      {dish.name.slice(0, 18)} ...
                    </h2>
                    <p>${dish.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className={styles.orderQty}>
                  <input
                    className={styles.orderInput}
                    type="number"
                    value={dish.quantity}
                    onChange={(e) =>
                      handleQuantityChange(dish.id, Number(e.target.value))
                    }
                    min="1"
                  />
                  <span className={styles.orderPrice}>
                    ${(dish.price * dish.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className={styles.orderModifiers}>
                <input
                  value={notes}
                  onChange={handleNotesChange}
                  className={styles.orderNote}
                  placeholder="Order Note..."
                  type="text"
                />
                <i
                  className={`${styles.orderDelete}`}
                  onClick={() => handleDeleteItem(dish.id)}
                  aria-label="Delete item"
                >
                  <Trash />
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <p className={styles.discount}>Discount</p>
        <p className={styles.discountAmount}>
          ${(calculateSubtotal() * (discount / 100)).toFixed(2)}
        </p>
      </div>
      <div className={styles.summary}>
        <p className={styles.total}>Subtotal</p>
        <p className={styles.totalAmount}>${calculateDiscountedTotal()}</p>
      </div>
      <button className={styles.paymentButton}>Continue to Payment</button>
    </div>
  );
};

export default Order;
