import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Nav from '../src/pages/Main/Nav';
import Login from '../src/pages/Login/Login';
import Main from '../src/pages/Main/Main'

const Router = () => {
  // let navigate = useNavigate();

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="main" element={<Main />}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;