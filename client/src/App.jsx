import { useState } from "react";
import Router from "./Routes/Router";
import { ToastContainer, Flip } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <Router />
      <ToastContainer theme="dark" position="top-center" autoClose={2000} transition={Flip} hideProgressBar={true} limit={1}/>
    </>
  );
}

export default App;
