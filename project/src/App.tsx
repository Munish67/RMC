import React, { useState } from 'react';
import Navigation from './components/Navigation';
import StartPage from './components/StartPage';
import LoginPage from './components/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login'>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'home' && <StartPage />}
      {currentPage === 'login' && <LoginPage onBack={() => setCurrentPage('home')} />}
    </div>
  );
}

export default App;