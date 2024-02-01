import React from "react";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContainer}>Let’s Introduce Ourself</div>
      <hr />
      <div className={styles.rightContainer}>
        <h1>Criminal Lawyer</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
