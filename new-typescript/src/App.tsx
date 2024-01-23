// Import Bootstrap styles (CSS) in a TypeScript file
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript (JS) in a TypeScript file
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Resgister';
const App: React.FC = () =>  {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App