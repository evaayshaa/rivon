import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Hero from './sections/hero/Hero'
import Collection from './sections/collection/Collection'
import Smart from './sections/smart/Smart'
import Follow from './sections/follow/Follow'
import ProductSec from './sections/productSec/ProductSec'

const Home = () => {
  return (
    <Layout>
<Hero/>
<Collection/>
<ProductSec/>
      <Smart/>
      <Follow/>
    </Layout>
  )
}

export default Home
