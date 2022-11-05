import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import Upload from "../pages/Upload";
import React from "react";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <>
    
    <Routes>      
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
        <Route path="upload" element={<Upload />} />
        <Route path="*" element={<Navigate replace to='/' />} />
      </Route>
    </Routes>
    </>
  );
};

export default Router;
