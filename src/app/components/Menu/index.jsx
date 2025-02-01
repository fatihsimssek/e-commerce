import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.scss";
import Beef from "../../../../public/dishes/beef-dumpling.png";
import Noodle from "../../../../public/dishes/noodle.png";
import Omlette from "../../../../public/dishes/ommlette.png";
import FriedRice from "../../../../public/dishes/fried-rice-omlete.png";
import Pasta from "../../../../public/dishes/spicy-pasta.png";

const Menu = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <Link className={styles.active} href="#">
          All Dishes
        </Link>
        <Link href="#">Cold Dishes</Link>
        <Link href="#">Soup</Link>
        <Link href="#">Grill</Link>
        <Link href="#">Appetizer</Link>
        <Link href="#">Dessert</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.orderType}>
          <select>
            <option>Dine In</option>
            <option>Take Away</option>
            <option>Delivery</option>
          </select>
        </div>
        <h1>Choose Dishes</h1>
        <div className={styles.dishes}>
          <div className={styles.dish}>
            <Image
              alt="Spicy seasoned seafood noodles"
              height={200}
              src={Noodle}
              width={200}
            />
            <p>Spicy seasoned seafood noodles</p>
            <p>$ 2.29</p>
          </div>
          <div className={styles.dish}>
            <Image
              alt="Salted Pasta with mushroom sauce"
              height={200}
              src={Pasta}
              width={200}
            />
            <p>Salted Pasta with mushroom sauce</p>
            <p>$ 2.69</p>
          </div>
          <div className={styles.dish}>
            <Image
              alt="Beef dumpling in hot and sour soup"
              height={200}
              src={Beef}
              width={200}
            />
            <p>Beef dumpling in hot and sour soup</p>
            <p>$ 2.99</p>
          </div>
          <div className={styles.dish}>
            <Image
              alt="Healthy noodle with spinach leaf"
              height={200}
              src={Noodle}
              width={200}
            />
            <p>Healthy noodle with spinach leaf</p>
            <p>$ 3.29</p>
          </div>
          <div className={styles.dish}>
            <Image
              alt="Hot spicy fried rice with omelet"
              height={200}
              src={FriedRice}
              width={200}
            />
            <p>Hot spicy fried rice with omelet</p>
            <p>$ 3.49</p>
          </div>
          <div className={styles.dish}>
            <Image
              alt="Spicy instant noodle with special omelette"
              height={200}
              src={Omlette}
              width={200}
            />
            <p>Spicy instant noodle with special omelette</p>
            <p>$ 3.59</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
