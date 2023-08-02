
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Footer from './components/Footer'
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="*" element={<NotFound />} />
  <Route path="/" index element={<Home />} />
  <Route path="/product-details/:slug" element={<ProductDetails />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
