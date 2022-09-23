import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import styled from "styled-components";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SIgnUp from "./Components/SIgnUp";
import Checkout from "./Components/Checkout";
function App() {
  return (
    <Router>
    <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/signup' element={<SIgnUp/>}/>
          </Routes>
    </Container>
    </Router>
  );
}
const Container=styled.div`
width:100vw;
`
export default App;
