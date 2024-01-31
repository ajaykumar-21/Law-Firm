import React from "react";
import styles from "./CenterDetails.module.css";

function CenterDetails() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>Home</div>
      <div className={styles.content}>Attorneys</div>
      <div className={styles.content}>Practice Area</div>
      <div className={styles.content}>About US</div>
    </div>
  );
}

export default CenterDetails;