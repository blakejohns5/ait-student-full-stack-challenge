import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GifProvider } from "./context/GifProvider";
import { AuthProvider } from "./context/AuthProvider";
import { ApiProvider } from "./context/ApiProvider";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>    
      <BrowserRouter>   
        <AuthProvider> 
          <ApiProvider>
            <GifProvider>
              <App />      
            </GifProvider>
          </ApiProvider>  
        </AuthProvider>
      </BrowserRouter>    
  </React.StrictMode>,
);
