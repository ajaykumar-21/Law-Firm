import React from "react";
import LogoImg from "../../assests/Logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.Image}>
      <img src={LogoImg} alt="LogoImg"/>
    </div>
  );
}
export default Logo;
