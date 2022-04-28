import logo from "./logo.svg";
import "./App.css";
import { Box, Button,TextField,ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { green, purple,red } from '@mui/material/colors';
import { AccountCircle } from "@mui/icons-material";

import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Topbar from "./Topbar";
import Countries from "./Countries";


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#70707C',
      },
      secondary: {
        main: '#70707C',
      },
    },
  });
  return (
   <> <Topbar/>
    <BrowserRouter>
  <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="countries" element={<Countries/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
