import React from 'react'
import styles from './BasketCard.module.scss'

const BasketCard = ({item,deleteBasket}) => {
  return (
    <div className={styles.cards}>
       <img src={item.thumbnail} alt="" />
       <p>{item.title}</p>
       <p>{item.price}</p>
       <button onClick={deleteBasket}>deleteBasket</button>
    </div>
  )
}

export default BasketCard
