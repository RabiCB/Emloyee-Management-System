import "./App.css";
import List from "./Components/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
