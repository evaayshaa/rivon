import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductThunk, getProductThunk, postProductThunk } from '../../../../redux/reducers/productSlice'
import { useFormik } from 'formik';
import AdminCard from '../../../../components/common/cards/adminCard/AdminCard';
import { deleteBasketThunk } from '../../../../redux/reducers/basketSlice';

const AdminPanel = () => {

  const dispatch=useDispatch()
 useEffect(() => {
 
dispatch(getProductThunk())

 }, [])

 const product=useSelector((state)=>state.product.product) 

const deleteAdmin=(id)=>{
  dispatch(deleteProductThunk(id))
  dispatch(deleteBasketThunk(id))
}


 const formik = useFormik({
  initialValues: {
   thumbnail: '',
    title: '',
    price: '',
  },
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
    dispatch(postProductThunk(values))
  },
});

 
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
       <label htmlFor="thumbnail">thumbnail</label>
       <input
         id="thumbnail"
         name="thumbnail"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.thumbnail}
       />
       <label htmlFor="price">price</label>
       <input
         id="price"
         name="price"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <label htmlFor="title">title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <button type="submit">Submit</button>
     </form>

     <table>
      <thead>
        <tr>
          <th>thumbnail</th>
          <th>price</th>
          <th>title</th>
          <th>sil</th>
        </tr>
      </thead>

      <tbody>
        {product&&product.map((item)=><AdminCard item={item} deleteAdmin={()=>deleteAdmin(item._id)} />)}
      </tbody>
     </table>
    </div>
  )
}

export default AdminPanel
