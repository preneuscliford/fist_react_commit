import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About';
import Error404 from './pages/Error404.js';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* On met path={*} => si l'URL n'existe pas */}
          <Route path='*'  element={< Error404 />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
