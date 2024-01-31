import React from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import CenterDetails from "../CenterDetails/CenterDetails";

function NavBar() {
  return <div className={styles.nav}>
    <Logo />
    <CenterDetails />
    <Button />
  </div>;
}
export default NavBar;
