import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from './components/Products';
import Article from './components/Article';
import Video from './components/Video';
import VideoModal from './components/VideoModal';
import Store from './components/Store';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import StorePage from './pages/StorePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<>
              <Header />
              <Products />
              <ProductsPage />
              <Article />
              <Video />
              <VideoModal />
              <Store />
              <Testimonial />
            </>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <Copyright />
    </Router>
  );
}

export default App;
