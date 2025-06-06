import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './Pages/Login/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import ShopPage from './Pages/Shop/ShopPage'




createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Login" element={<LoginPage />} />
    <Route path="/Shop" element={<ShopPage />} />
   
    
  </Routes>
</BrowserRouter>
)
