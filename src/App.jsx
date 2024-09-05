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
import Decoration from './components/Dacoration'; // Fixed spelling
import ScrollToTop from './components/ScrollToTop'; // Import the new component

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Layout>
            <ScrollToTop /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/billing" element={<BillingPage />} />
              <Route path="/accessories" element={<Accessories />} /> 
              <Route path="/women" element={<Women />} /> 
              <Route path="/men" element={<Men />} /> 
              <Route path="/homeAppliances" element={<HomeAppliances />} /> 
              <Route path="/decoration" element={<Decoration />} /> {/* Fixed spelling */}
            </Routes>
          </Layout>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
