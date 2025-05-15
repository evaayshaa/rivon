import React from 'react'
import styles from './ProductCard.module.scss'

const ProductCard = ({item,addToBasket}) => {
  return (
    <div className={styles.cards}>
       <img src={item.thumbnail} alt="" />
       <p>{item.title}</p>
       <p>{item.price}</p>
       <button onClick={addToBasket}>add to basket</button>
    </div>
  )
}

export default ProductCard
