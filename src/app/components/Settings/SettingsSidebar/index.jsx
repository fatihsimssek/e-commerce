"use client";
import styles from "./SettingsSidebar.module.scss";
import AppereanceIcon from "../../../../../public/icons/settings/Appereance.svg";
import RestaurantIcon from "../../../../../public/icons/settings/Restaurant.svg";
import ProductsIcon from "../../../../../public/icons/settings/Discount.svg";
import NotificationIcon from "../../../../../public/icons/settings/Notification.svg";
import SecurityIcon from "../../../../../public/icons/settings/Security.svg";
import AboutIcon from "../../../../../public/icons/settings/About Us.svg";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    id: "appereance",
    Icon: AppereanceIcon,
    label: "Appereance",
    href: "/appereance",
  },
  {
    id: "restaurant",
    Icon: RestaurantIcon,
    label: "Restaurant",
    href: "/restaurant",
  },
  {
    id: "productsManagement",
    Icon: ProductsIcon,
    label: "Products Management",
    href: "/products-management",
  },
  {
    id: "notifications",
    Icon: NotificationIcon,
    label: "Notifications",
    href: "/notifications",
  },
  { id: "security", Icon: SecurityIcon, label: "Security", href: "/security" },
  { id: "aboutUs", Icon: AboutIcon, label: "About Us", href: "/about-us" },
];

const SettingsSidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.menuItems}>
        {menuItems.map(({ id, Icon, label, href }) => {
          return (
            <Link key={id} href={href} onClick={() => handleItemClick(id)}>
              <div
                className={activeItem === id ? styles.active : ""}
                aria-label={label}
              >
                <Icon fill={activeItem === id ? "white" : "#EA7C69"} />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default SettingsSidebar;
