import React from 'react';
import Home from './pages/Home'
import Detail from './pages/Detail'
import './style/global.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:city" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
