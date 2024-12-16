import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProductDetail from './pages/ProductDetail'
import FormBillingPage from './pages/FormBillingPage'
import ReciepPages from './pages/ReciepPages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/product/:id' element={<ProductDetail />} ></Route>

        <Route path='/formbilling/:id' element={<FormBillingPage />} ></Route>
        <Route path='/reciep' element={<ReciepPages />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App