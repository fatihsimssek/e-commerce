"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.scss";
import Beef from "../../../../public/dishes/beef-dumpling.png";
import Noodle from "../../../../public/dishes/noodle.png";
import Omlette from "../../../../public/dishes/ommlette.png";
import FriedRice from "../../../../public/dishes/fried-rice-omlete.png";
import Pasta from "../../../../public/dishes/spicy-pasta.png";
import { useEffect, useState } from "react";
import Order from "../Order";

const Menu = () => {
  const [activeContent, setActiveContent] = useState("all");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [orderedDishes, setOrderedDishes] = useState(
    JSON.parse(localStorage.getItem("orderedDishes")) || []
  );

  const [orderType, setOrderType] = useState("dineIn");
  const [orderNumber, setOrderNumber] = useState(0);

  useEffect(() => {
    const storedOrderNumber =
      JSON.parse(localStorage.getItem("orderNumber")) || 0;
    setOrderNumber(storedOrderNumber);
  }, []);

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  const dishes = [
    {
      id: 1,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      image: Noodle,
    },
    {
      id: 2,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      image: Pasta,
    },
    {
      id: 3,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      image: Beef,
    },
    {
      id: 4,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      image: Noodle,
    },
    {
      id: 5,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      image: FriedRice,
    },
    {
      id: 6,
      name: "Spicy instant noodle with special omelette",
      price: 3.59,
      image: Omlette,
    },
  ];

  const handleDishClick = (dish) => {
    const existingDishes = selectedDishes.find((item) => item.id === dish.id);

    if (existingDishes) {
      const updatedDishes = selectedDishes.map((item) =>
        item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setSelectedDishes(updatedDishes);
    } else {
      const newDish = { ...dish, quantity: 1 };
      setSelectedDishes((prevDishes) => [...prevDishes, newDish]);
    }

    const updatedOrderedDishes = [...orderedDishes];
    const existingOrderedDish = updatedOrderedDishes.find(
      (item) => item.id === dish.id
    );

    if (existingOrderedDish) {
      existingOrderedDish.quantity += 1;
    } else {
      updatedOrderedDishes.push({ ...dish, quantity: 1 });
    }

    setOrderedDishes(updatedOrderedDishes);
    localStorage.setItem("orderedDishes", JSON.stringify(updatedOrderedDishes));

    let currentOrderNumber =
      JSON.parse(localStorage.getItem("orderNumber")) || 0;

    if (updatedOrderedDishes.length === 1) {
      currentOrderNumber += 1;
      localStorage.setItem("orderNumber", JSON.stringify(currentOrderNumber));
    }

    setOrderNumber(currentOrderNumber);
  };

  const handleDeleteItem = (id) => {
    const updatedDishes = selectedDishes.filter((item) => item.id !== id);
    setSelectedDishes(updatedDishes);

    const updatedOrderedDishes = orderedDishes.filter((item) => item.id !== id);
    setOrderedDishes(updatedOrderedDishes);
    localStorage.setItem("orderedDishes", JSON.stringify(updatedOrderedDishes));
  };
  const handleOrderTypeChange = (event) => {
    setOrderType(event.target.value);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Link
          onClick={() => handleContentChange("all")}
          className={activeContent === "all" ? styles.active : ""}
          href="#"
        >
          All Dishes
        </Link>
        <Link
          onClick={() => handleContentChange("cold")}
          className={activeContent === "cold" ? styles.active : ""}
          href="#"
        >
          Cold Dishes
        </Link>
        <Link
          onClick={() => handleContentChange("soup")}
          className={activeContent === "soup" ? styles.active : ""}
          href="#"
        >
          Soup
        </Link>
        <Link
          onClick={() => handleContentChange("grill")}
          className={activeContent === "grill" ? styles.active : ""}
          href="#"
        >
          Grill
        </Link>
        <Link
          onClick={() => handleContentChange("appetizer")}
          className={activeContent === "appetizer" ? styles.active : ""}
          href="#"
        >
          Appetizer
        </Link>
        <Link
          onClick={() => handleContentChange("dessert")}
          className={activeContent === "dessert" ? styles.active : ""}
          href="#"
        >
          Dessert
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.orderType}>
          <h1 className={styles.title}>Choose Dishes</h1>
          <select onChange={handleOrderTypeChange} value={orderType}>
            <option value="dineIn">Dine In</option>
            <option value="toGo">To Go</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        <div className={styles.dishes}>
          {activeContent === "all" &&
            dishes.map((dish) => (
              <div
                key={dish.id}
                className={styles.dish}
                onClick={() => handleDishClick(dish)}
              >
                <Image
                  alt={dish.name}
                  height={132}
                  src={dish.image}
                  width={132}
                />
                <p className={styles.name}>{dish.name}</p>
                <p className={styles.price}>${dish.price.toFixed(2)}</p>
              </div>
            ))}
          {activeContent === "cold" && <p>Displaying Cold Dishes...</p>}
          {activeContent === "soup" && <p>Displaying Soup...</p>}
          {activeContent === "grill" && <p>Displaying Grill...</p>}
          {activeContent === "appetizer" && <p>Displaying Appetizer...</p>}
          {activeContent === "dessert" && <p>Displaying Dessert...</p>}
        </div>
      </div>
      {selectedDishes.length > 0 && (
        <div>
          {selectedDishes.map((dish) => (
            <Order
              key={dish.id}
              handleDeleteItem={handleDeleteItem}
              orderedDishes={orderedDishes}
              setOrderedDishes={setOrderedDishes}
              orderType={orderType}
              orderNumber={orderNumber}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
