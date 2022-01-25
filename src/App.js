import React from "react";
import Login from "./components/Login";
import Support from "./components/Support";
import Prac from "./components/Prac";
import Renderprac from "./components/Renderprac";
import { Routes, Route } from "react-router-dom";

const App = () => {
 
  
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/prac" element={<Prac />} />
          <Route path="/renderprac/:id" element={<Renderprac />} />
        </Routes>
    </>
  );
};

export default App;

