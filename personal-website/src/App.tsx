import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App bg-gray-700 flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;