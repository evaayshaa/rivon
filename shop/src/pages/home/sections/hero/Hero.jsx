import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>ELEGANCE IS ELMONOTION</h3>
          <h1>STAY AHEAD OF THE THRENDS</h1>
          <p>Tell your brends story through </p>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
