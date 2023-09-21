import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Page/Home";
import Cart from "./Page/Cart";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <div>
       <div className="bg-slate-900">
        <Navbar/>
       </div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
  </div>
  )
};

export default App;
