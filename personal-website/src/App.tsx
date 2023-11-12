import React from 'react';
import './App.css'; // make sure to import your Tailwind CSS here

// Import other components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App bg-gray-700 flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
