import React from "react";
import { ReactComponent as IntroMan } from "../../assests/IntroMan.svg";
import { ReactComponent as Message } from "../../assests/Message.svg";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rightContainer}>
        <div className={styles.heading}>
          <h1>You don’t have to Fight them Alone.</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.slideContainer}>
          <div className={styles.message}>
            <Message /> 
            <div>Enter your eamil address</div>
          </div >
          <div className={styles.slider}>
           Let’s Talk
          </div>
        </div>
      </div>
      <div className={styles.leftContainer}>
        <IntroMan />
      </div>
    </div>
  );
}

export default Welcome;
