import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import SubmitStory from './pages/SubmitStory';
import { checkAuthStatus, authState } from './data/auth';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check authentication status on app load
  useEffect(() => {
    const isAuth = checkAuthStatus();
    setIsAuthenticated(isAuth);
    setCurrentUser(authState.currentUser);
  }, []);

  // Simple routing based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage('home');
    window.location.hash = '#home';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'submit':
        return <SubmitStory />;
      default:
        return <Home />;
    }
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark-900">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  // Show main app if authenticated
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
