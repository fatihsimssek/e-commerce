"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.scss";
import Beef from "../../../../public/dishes/beef-dumpling.png";
import Noodle from "../../../../public/dishes/noodle.png";
import Omlette from "../../../../public/dishes/ommlette.png";
import FriedRice from "../../../../public/dishes/fried-rice-omlete.png";
import Pasta from "../../../../public/dishes/spicy-pasta.png";
import { useState } from "react";

const Menu = () => {
  const [activeContent, setActiveContent] = useState("all");

  const handleContentChange = (content) => {
    setActiveContent(content);
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
          <select>
            <option>Dine In</option>
            <option>To Go</option>
            <option>Delivery</option>
          </select>
        </div>
        <div className={styles.dishes}>
          {activeContent === "all" && (
            <>
              <div className={styles.dish}>
                <Image
                  alt="Spicy seasoned seafood noodles"
                  height={132}
                  src={Noodle}
                  width={132}
                />
                <p className={styles.name}>Spicy seasoned seafood noodles</p>
                <p className={styles.price}>$ 2.29</p>
              </div>
              <div className={styles.dish}>
                <Image
                  alt="Salted Pasta with mushroom sauce"
                  height={132}
                  src={Pasta}
                  width={132}
                />
                <p className={styles.name}>Salted Pasta with mushroom sauce</p>
                <p className={styles.price}>$ 2.69</p>
              </div>
              <div className={styles.dish}>
                <Image
                  alt="Beef dumpling in hot and sour soup"
                  height={132}
                  src={Beef}
                  width={132}
                />
                <p className={styles.name}>
                  Beef dumpling in hot and sour soup
                </p>
                <p className={styles.price}>$ 2.99</p>
              </div>
              <div className={styles.dish}>
                <Image
                  alt="Healthy noodle with spinach leaf"
                  height={132}
                  src={Noodle}
                  width={132}
                />
                <p className={styles.name}>Healthy noodle with spinach leaf</p>
                <p className={styles.price}>$ 3.29</p>
              </div>
              <div className={styles.dish}>
                <Image
                  alt="Hot spicy fried rice with omelet"
                  height={132}
                  src={FriedRice}
                  width={132}
                />
                <p className={styles.name}>Hot spicy fried rice with omelet</p>
                <p className={styles.price}>$ 3.49</p>
              </div>
              <div className={styles.dish}>
                <Image
                  alt="Spicy instant noodle with special omelette"
                  height={132}
                  src={Omlette}
                  width={132}
                />
                <p className={styles.name}>
                  Spicy instant noodle with special omelette
                </p>
                <p className={styles.price}>$ 3.59</p>
              </div>
            </>
          )}
          {activeContent === "cold" && <p>Displaying Cold Dishes...</p>}
          {activeContent === "soup" && <p>Displaying Soup...</p>}
          {activeContent === "grill" && <p>Displaying Grill...</p>}
          {activeContent === "appetizer" && <p>Displaying Appetizer...</p>}
          {activeContent === "dessert" && <p>Displaying Dessert...</p>}
        </div>
      </div>
    </div>
  );
};

export default Menu;
