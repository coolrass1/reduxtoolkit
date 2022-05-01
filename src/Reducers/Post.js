import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const url="http://mail.librahouse.co.uk:5000/posts"
const initialState = {
  entities: [],
  loading: false,
  error:null
}

export const getPosts = createAsyncThunk(
  //action type string
  'posts/getPosts',
  // callback function
  async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
  //   (data) => data.json()
  // )
  const {data}= await axios.get(url)
 
 // console.log(thunkAPI.getState())
  return data
})

export const createPost = createAsyncThunk(
  //action type string
  'posts/createPost',
  // callback function
  async (name, { rejectWithValue }) => {
   try {
    const {data}= await axios.post(url,name)
    return data
   } catch (err) {
    return rejectWithValue (err.response.data)
   }

 
 
})

export const updatePost = createAsyncThunk(
  //action type string
  'posts/updatePost',
  // callback function
  async (name, thunkAPI) => {
   
  const {data}= await axios.patch(`${url}/${name.Id}`,name)
 
  return data
})
export const deletePost = createAsyncThunk(
  //action type string
  'posts/deletePost',
  // callback function
  async (name, thunkAPI) => {
   
  const {data}= await axios.delete(`${url}/${name.Id}`,name)
 
  return data
})


export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(getPosts.fulfilled, (state, action) => {
  //     // Add user to the state array
  //     state.entities=action.payload
  //   })
  //   builder.addCase(getPosts.rejected, (state, action) => {
  //       // Add user to the state array
  //       state.entities.push(action.payload)
  //     })
  //     builder.addCase(createPost.fulfilled, (state, action) => {
  //       // Add user to the state array
  //       state.entities.push(action.payload);
  //     })
  //     builder.addCase(updatePost.fulfilled, (state, action) => {
  //       // Add user to the state array
  //       state.entities=state.entities.map(tt=>tt.id===action.payload.id?action.payload:tt)
  //     })

  //     builder.addCase(deletePost.fulfilled, (state, action) => {
  //       // Add user to the state array
  //     console.log(action.payload)
  //    state.entities=state.entities.filter((user) => user.id !== action.payload.Id);
    
  //     })



  // },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
console.log(action.payload)
      state.entities= action.payload;
    },
    [createPost.fulfilled]: (state, action) => {

      state.entities.push(action.payload);
    },
    [createPost.rejected]: (state, action) => {
console.log(`${JSON.stringify (action)} is error`)
console.log(action.payload.message[0])
      state.error=action.payload.message[0];
    },
    [updatePost.fulfilled]: (state, action) => {
      
      state.entities=state.entities.map(tt=>tt._id===action.payload._id?action.payload:tt)
    },
    [deletePost.fulfilled]: (state, action) => {
      console.log('del')
      console.log(action.payload)
    
      state.entities=state.entities.filter((user) => user._id !== action.payload._id);

    },
  },
})

export const postReducer = postSlice.reducer