import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallerie from './gallerie';
import Landing from './landing';

export default function AppNavigations (props) {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/gallerie' element={<Gallerie/>}/>
      </Routes>
    </Router>
  );
}
