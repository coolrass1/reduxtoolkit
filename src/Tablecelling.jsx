import { Button, FormGroup, IconButton, Stack, TableCell, TableRow, TextField } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from 'react-redux';
import React from 'react'
import { useEffect,useState } from "react";
import {updatePost,deletePost } from "./Reducers/Post"

const Tablecelling = ({row}) => {
    const dispatch=useDispatch()
    const [form, setForm]=useState(false)
    const [post, setPost]=useState({Description:row.Description, Title:row.Title, Id:row._id})
    const handleChange=e=>{
        e.preventDefault()
        
        setPost({...post, [e.target.name]:e.target.value})
     
    }

    return (
        !form?(<TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Title}
                  </TableCell>
                  <TableCell>{row.Description}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={e=>setForm(!form)} sx={{color:"green"}} aria-label="delete" size="large">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={e=>{dispatch(deletePost(post))}} sx={{color:"red"}} aria-label="delete" size="large">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>):(<TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >

                    <TableCell component="th" scope="row">
                    <TextField  name="Title"  defaultValue={row.Title} onChange={handleChange} id="standard-basic" label="Title" variant="standard" />
                  </TableCell>
                  <TableCell>   <TextField   defaultValue={row.Description} name="Description" onChange={handleChange}  id="standard-basic" label="Description" variant="standard" /></TableCell>
                  <TableCell align="right">
                    <IconButton onClick={e=>{dispatch(updatePost(post));setForm(!form)}} sx={{color:"green"}} aria-label="delete" size="large">
                    < SaveIcon/>
               
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={e=>{dispatch(deletePost(post))}} sx={{color:"red"}} aria-label="delete" size="large">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                
             
          
                </TableRow>)
      )
  
}

export default Tablecelling