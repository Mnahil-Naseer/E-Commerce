import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BillingPage from './pages/BillingPage';
import Login from './pages/LoginPage';
import Accessories from './components/Accessories'; 
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import Layout from './components/Layout';
import Women from './components/Women';
import Men from './components/Men';
import HomeAppliances from './components/HomeAppliances';
import Dacoration from './components/Dacoration';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/billing" element={<BillingPage />} />
              <Route path="/components/accessories" element={<Accessories />} /> 
              <Route path="/components/women" element={<Women />} /> 
              <Route path="/components/men" element={<Men />} /> 
              <Route path="/components/homeAppliances" element={<HomeAppliances />} /> 
              <Route path="/components/decoration" element={<Dacoration />} /> 
            </Routes>
          </Layout>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
