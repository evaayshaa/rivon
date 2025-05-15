import React from "react";
import styles from "./Smart.module.scss";

const Smart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-4.png?v=1733907264&width=375" alt="" />
          <h5>Smart Home Assistans</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vero, earum eligendi, omnis  consequuntur, doloribus delectus rem a tempore fugit officia! Molestiae aspernatur ipsa  numquam quasi similique, suscipit facilis obcaecati.</p>
          <span>Emily T</span>
        </div>
        <div className={styles.card}>
          <img src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-4.png?v=1733907264&width=375" alt="" />
          <h5>Smart Home Assistans</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vero, earum eligendi, omnis  consequuntur, doloribus delectus rem a tempore fugit officia! Molestiae aspernatur ipsa  numquam quasi similique, suscipit facilis obcaecati.</p>
          <span>Emily T</span>
        </div>
       
      </div>
    </div>
  );
};

export default Smart;
