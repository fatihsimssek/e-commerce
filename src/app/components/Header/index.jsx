import styles from "./Header.module.scss";
import Search from "../../../../public/icons/search.svg";
import Menu from "../Menu";

const Header = () => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <div className={styles.title}>Jaegar Resto</div>
          <div className={styles.subtitle}>{date.toDateString()}</div>
        </div>
        <div className={styles.search}>
          <Search />
          <input type="text" placeholder="Search for food, coffee, etc..." />
        </div>
      </div>
      <Menu className={styles.menu} />
    </div>
  );
};

export default Header;
