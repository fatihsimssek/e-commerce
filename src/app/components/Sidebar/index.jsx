"use client";
import Logo from "../../../../public/icons/Logo.svg";
import HomeIcon from "../../../../public/icons/HomeIcon";
import DiscountIcon from "../../../../public/icons/DiscountIcon";
import DashboardIcon from "../../../../public/icons/DashboardIcon";
import MessageIcon from "../../../../public/icons/MessageIcon";
import NotificationIcon from "../../../../public/icons/NotificationIcon";
import SettingIcon from "../../../../public/icons/SettingIcon";
import LogoutIcon from "../../../../public/icons/Logout";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { id: "home", Icon: HomeIcon, label: "Home", href: "/" },
  { id: "discount", Icon: DiscountIcon, label: "Discount", href: "/discount" },
  {
    id: "dashboard",
    Icon: DashboardIcon,
    label: "Dashboard",
    href: "/dashboard",
  },
  { id: "messages", Icon: MessageIcon, label: "Messages", href: "/messages" },
  {
    id: "notifications",
    Icon: NotificationIcon,
    label: "Notifications",
    href: "/notifications",
  },
  { id: "settings", Icon: SettingIcon, label: "Settings", href: "/settings" },
  { id: "logout", Icon: LogoutIcon, label: "Logout", href: "/logout" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <nav className={styles.sidebar}>
      <Logo className={styles.logo} />
      <div className={styles.menuItems}>
        {menuItems.map(({ id, Icon, label, href }) => {
          return (
            <div key={id}>
              <Link href={href} onClick={() => handleItemClick(id)}>
                <div
                  className={activeItem === id ? styles.active : ""}
                  aria-label={label}
                >
                  <Icon
                    rectFill={activeItem === id ? "#EA7C69" : "transparent"}
                    fill={activeItem === id ? "white" : "#EA7C69"}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
