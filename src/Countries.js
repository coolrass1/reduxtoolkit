import { Container, Grid } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountries } from "../src/Reducers/CountriesReducers";
const Countries = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(getPosts());
        dispatch(getCountries())
      }, [dispatch]);
      const countries = useSelector((state) => state.Countries.entities);
  return (
      <Container>
    <Grid mt={4}container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {countries?.map((country, index)=><Grid item xs={12} md={3} key={index}>
      <MediaCard country={country}/>
      
    </Grid>)}
   
  
  </Grid>
  </Container>
  )
}

export default Countries