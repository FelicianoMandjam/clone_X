import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import Home from './pages/home/Home';




function App() {

  return (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}

export default App
