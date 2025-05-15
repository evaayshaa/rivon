import React from 'react'
import styles from './Header.module.scss'
import { SlMagnifier } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
         <img src="https://rivon-demo.myshopify.com/cdn/shop/files/logo-2.png?v=1734254597&width=600" alt="" />
        </div>

        <div className={styles.navbar}>
          <ul>
            <li><a onClick={()=>navigate('/')} href="">Home</a></li>
            <li><a  href="">Shop</a></li>
            <li><a onClick={()=>navigate('/basket')} href="">Basket</a></li>
            <li><a onClick={()=>navigate('/admin')} href="">Admin</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        <div className={styles.icon}>
        <SlMagnifier />
        <CiHeart />
        <CiShoppingCart />
        </div>

      <div className={styles.hamburger}>
      <RxHamburgerMenu />
      </div>
      </div>
   
    </div>
  )
}

export default Header
