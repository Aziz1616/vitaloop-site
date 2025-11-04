import React from 'react';
// DEĞİŞİKLİK BURADA:
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

function App() {
  return (
    // "Router" takma adı sayesinde burayı değiştirmek gerekmiyor
    <Router> 
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;