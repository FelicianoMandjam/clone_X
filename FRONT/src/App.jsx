import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Register from './pages/Auth/register.jsx';



function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
