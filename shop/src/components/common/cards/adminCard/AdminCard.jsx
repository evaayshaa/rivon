import React from 'react'

const AdminCard = ({item,deleteAdmin}) => {
  
  return (
   <tr>
    <td><img src={item.thumbnail} alt="" /></td>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td><button onClick={deleteAdmin}>sil</button></td>
   </tr>
  )
}

export default AdminCard
