import React from "react";
import styles from "./Choose.module.css";
import { ReactComponent as Incog } from "../../assests/Incog.svg";

function Choose() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Why Choose us?</div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.incog}>
            <Incog />
          </div>
          <h2>98% Success Rate</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className={styles.middleCard}>
          <div className={styles.incog}>
            <Incog />
          </div>
          <h2>98% Success Rate</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className={styles.card}>
          <div className={styles.incog}>
            <Incog />
          </div>
          <h2>98% Success Rate</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Choose;
