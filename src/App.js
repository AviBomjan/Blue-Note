import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home/Home';
import ScrollToTop from './components/scrollToTop';

// eslint-disable-next-line
import HongKong from './components/pages/continents/asia/Hong_Kong/Hong_Kong';
import Thailand from './components/pages/continents/asia/Thailand/Thailand'; 

import Le_188 from './components/pages/continents/asia/Hong_Kong/pages/Le188/Le_188';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Navbar /> 
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/Hong_Kong' element={<HongKong/>} /> 
        <Route path='/Thailand' element={<Thailand/>} /> 

        {/* Restaurant */}
        <Route path='/Le_188' element={<Le_188/>} />

      </Routes>
    
    </Router>
    
    </>
 
  );
}

export default App;
