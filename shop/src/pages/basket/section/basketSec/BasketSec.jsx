import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../../../../redux/reducers/basketSlice'
import styles from './BasketSec.module.scss'
import BasketCard from '../../../../components/common/cards/basketCard/BasketCard'

const BasketSec = () => {

  const dispatch= useDispatch()
  useEffect(() => {
   
    dispatch(getBasketThunk())
  }, [])

  const basket=useSelector((state)=>state.basket.basket)|| []
  const loading=useSelector((state)=>state.basket.loading)
  const error=useSelector((state)=>state.basket.error)


  const deleteBasket=(id)=>{
    dispatch(deleteBasketThunk(id))
  }

  if(error) return <h1>xeta</h1>
  if(loading) return <h1>yuklenir</h1>

  return (
    <div className={styles.container}>
       <div className={styles.card}>

       {basket&&basket.map((item)=><BasketCard item={item} deleteBasket={()=>deleteBasket(item._id)}/>)}
       </div>
    </div>
  )
}

export default BasketSec
