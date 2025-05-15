import React from "react";
import styles from "./Follow.module.scss";

const Follow = () => {
  return (
    <div className={styles.container}>
     
        <h2>Follow @Rivon</h2>
        <p>The best quality products are waiting for you & choose it now.</p>
    

      <div className={styles.cards}>
        <div className={styles.card}>
            <img src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-1png.png?v=1733907473&width=450" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-1png.png?v=1733907473&width=450" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-1png.png?v=1733907473&width=450" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-1png.png?v=1733907473&width=450" alt="" />
        </div>
        <div className={styles.card}>
            <img src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-1png.png?v=1733907473&width=450" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
