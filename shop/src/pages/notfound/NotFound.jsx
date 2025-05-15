import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate=useNavigate()
  return (
    <div>
      <h1>notfound</h1>
      <button onClick={()=>navigate('/')}>goo homeee</button>
    </div>
  )
}

export default NotFound
