import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import Admin from '../pages/admin/Admin'
import NotFound from '../pages/notfound/NotFound'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/basket' element={<Basket/>}/>
        <Route  path='/admin' element={<Admin/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Router
