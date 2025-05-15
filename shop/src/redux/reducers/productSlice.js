import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getProductThunk=createAsyncThunk('get/product',async()=>{
    const res=await axios.get('http://localhost:5050/product')
    return res.data
})

export const postProductThunk=createAsyncThunk('post/product',async(data)=>{
    const res=await axios.post('http://localhost:5050/product',data)
    return res.data
})
export const deleteProductThunk=createAsyncThunk('delete/product',async(id)=>{
    const res=await axios.delete(`http://localhost:5050/product/${id}`)
    return id
})


export const productSlice=createSlice({
    name:'product',
    initialState:{
        product:[]
        
    },
    extraReducers:(builder)=>
    builder

    .addCase(getProductThunk.fulfilled,(state,action)=>{
        state.loading=false
        state.product=action.payload
    })
    .addCase(getProductThunk.pending,(state,action)=>{
        state.loading=true
        
    })
    .addCase(getProductThunk.rejected,(state,action)=>{
        
        state.error=action.error
    })


    .addCase(postProductThunk.fulfilled,(state,action)=>{
        state.loading=false
        state.product.push(action.payload)
    })
    .addCase(postProductThunk.pending,(state,action)=>{
        state.loading=true
        
    })
    .addCase(postProductThunk.rejected,(state,action)=>{
        
        state.error=action.error
    })

    .addCase(deleteProductThunk.fulfilled,(state,action)=>{
      state.product=state.product.filter((item)=>item._id !==action.payload)
    })
})

export default productSlice.reducer