import React from "react";
import './App.css';
import Navigation from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <>
    <BrowserRouter>
   <Navigation/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Menu' element={<Menu/>}/>
    <Route path='/About' element={ <About/>}/>
    <Route path='/Contact' element={ <Contact/>}/>
    {/* <Route path='/Register' element={ <Register/>}/> */}
    {/* <Route path='/Login' element={ <Login/>}/> */}
   </Routes>
   </BrowserRouter>

    </>
  )
}
export default App; 
