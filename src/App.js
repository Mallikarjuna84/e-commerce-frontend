import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import Pages
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

// Import Auth Selector
import { selectIsAuthenticated } from './store/authSlice';

// Protected Route
function ProtectedRoute({ element }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />

          {/* Protected Route */}
          <Route
            path="/order-history"
            element={<ProtectedRoute element={<OrderHistoryPage />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
