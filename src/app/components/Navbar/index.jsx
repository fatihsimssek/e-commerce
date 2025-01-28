import Image from "next/image";
import Logo from "../../../../public/icons/Logo.svg";
import Discount from "../../../../public/icons/Discount.svg";
import Dashboard from "../../../../public/icons/Dashboard.svg";
import Message from "../../../../public/icons/Message.svg";
import Notification from "../../../../public/icons/Notification.svg";
import Setting from "../../../../public/icons/Setting.svg";
import Logout from "../../../../public/icons/Logout.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src={Logo} alt="Logo" width={100} height={100} />
      <div className="flex justify-center items-center flex-col">
        <button>
          <Image src={Discount} alt="Discount" width={24} height={24} />{" "}
          dfasfsadf
        </button>
        <button>
          <Image src={Dashboard} alt="Dashboard" width={24} height={24} />
        </button>
        <button>
          <Image src={Message} alt="Message" width={24} height={24} />
        </button>
        <button>
          <Image src={Notification} alt="Notification" width={24} height={24} />
        </button>
        <button>
          <Image src={Setting} alt="Setting" width={24} height={24} />
        </button>
        <button>
          <Image src={Logout} alt="Logout" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
