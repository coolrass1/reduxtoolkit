import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = { loading: false, entities: [] };

export const getCountries = createAsyncThunk(
    //action type string
    'countries/getCountries',
    // callback function
    async (name, thunkAPI) => {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    //   (data) => data.json()
    // )
    const {data}= await axios.get("https://restcountries.com/v2/all")
    console.log(thunkAPI.getState())
    return data
  })
const CountriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(action.payload)
        state.entities=action.payload
      }) 
  }
   
  });



export const CountryReducer =  CountriesSlice.reducer