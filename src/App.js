
import "./App.css";




import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Topbar from "./Topbar";
import Countries from "./Countries";


function App() {


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
