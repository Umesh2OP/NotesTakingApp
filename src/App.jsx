import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import Viewpaste from "./components/Viewpaste";
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />

      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Paste />
        <Navbar />
        
        
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
         <Navbar />
         <Viewpaste />
      </div>
    }
  
  ]

  
)

const App = () => {
  

  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  );
};

export default App;
