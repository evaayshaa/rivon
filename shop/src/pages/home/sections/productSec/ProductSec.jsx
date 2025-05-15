import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../../redux/reducers/productSlice'
import { postBasketThunk } from '../../../../redux/reducers/basketSlice'
import styles from './ProductSec.module.scss'
import ProductCard from '../../../../components/common/cards/productCard/ProductCard'

const ProductSec = () => {

  const dispatch= useDispatch()
  useEffect(() => {
   
    dispatch(getProductThunk())
  }, [])

  const product=useSelector((state)=>state.product.product)|| []
  const loading=useSelector((state)=>state.product.loading)
  const error=useSelector((state)=>state.product.error)


  const addToBasket=(item)=>{
    dispatch(postBasketThunk(item))
  }

  if(error) return <h1>xeta</h1>
  if(loading) return <h1>yuklenir</h1>
  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {product&&product.map((item)=><ProductCard  item={item} addToBasket={()=>addToBasket(item)}/>)}
      </div>
      
    </div>
  )
}

export default ProductSec
