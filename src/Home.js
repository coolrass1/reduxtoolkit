import {

  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../src/Reducers/Post";
import { getCountries } from "../src/Reducers/CountriesReducers";

import Tablecelling from "./Tablecelling";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());

  }, [dispatch]);
  const post = useSelector((state) => state.posts.entities);


  if (post?.loading) return <p>Loading...</p>;

  return (
    // <Container>
    //   <h2>Blog Posts</h2>
    //   {post?.map((post) => (
    //     <p key={post.id}>{post.title}</p>
    //   ))}
    // </Container>
    <Container>
    <TableContainer
      sx={{ width: "700px", marginTop: "10px" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right"> Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {post?.map((row, index) => (
           <Tablecelling key={index} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
