import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from 'src\components\LoginPage.js'; 

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />    
        </Routes>
      </div>
    </Router>
  );
};

export default App;
