import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import { NavItem } from "./nav-item/NavItem";

export const AppHeader = () => {
  return (
    <header className={styles.appHeader}>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <NavItem text="Конструктор" icon={<BurgerIcon type="primary" />} />
          <NavItem text="Лента заказов" icon={<ListIcon type="primary" />} />
        </div>
        <div className={styles.navItem}>
          <Logo />
        </div>
        <div className={styles.navItem}>
          <NavItem
            text="Личный кабинет"
            icon={<ProfileIcon type="primary" />}
          />
        </div>
      </nav>
    </header>
  );
};
