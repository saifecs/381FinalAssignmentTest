import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Adjusting imports to use relative paths from the src directory to components
import Homepage from './components/Homepage.js';
import Productpage from './components/Productpage.js';
import LoginPage from './components/LoginPage.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
