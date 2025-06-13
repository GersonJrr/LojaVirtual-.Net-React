import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './Pages/Login/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import CardapioPage from './Pages/Shop/CardapioPage'






createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Login" element={<LoginPage />} />
    <Route path="/Cardapio" element={<CardapioPage/>} />
    
   
  </Routes>
</BrowserRouter>
)
