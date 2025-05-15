import React from 'react'
import styles from './Collection.module.scss'

const Collection = () => {
  return (
    <div className={styles.shop}>
    <div className={styles.container}>
        <div className={styles.cards}>
            <div className={styles.card}>
                
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/banner-1.png?v=1733829134&width=375" alt="" />
               <p>TOP COLLECTIONS</p>
               <h2>TOP TRENDS STYLES</h2>
               <span>Shop Now</span>
            </div>
            <div className={styles.card}>
                
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/banner-1.png?v=1733829134&width=375" alt="" />
               <p>TOP COLLECTIONS</p>
               <h2>TOP TRENDS STYLES</h2>
               <span>Shop Now</span>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Collection
