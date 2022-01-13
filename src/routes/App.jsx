import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import "@styles/global.scss";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
