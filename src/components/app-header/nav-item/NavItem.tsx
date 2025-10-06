import styles from "./NavItem.module.css";


type NavItemProps = {
  text: string;
  icon: React.ReactElement;
};

export const NavItem = (props: NavItemProps) => {
  const { text, icon } = props;

  return (
    <button
      className={styles.button}
    >
      {icon}
      <p className="text text_type_main-default">{text}</p>
    </button>
  );
};
