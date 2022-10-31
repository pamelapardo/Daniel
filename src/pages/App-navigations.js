import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallerie from './gallerie';
import Landing from './landing';
import MonHistoire from './monHistoire';

export default function AppNavigations (props) {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/gallerie' element={<Gallerie/>}/>
        <Route exact path='/monHistoire' element={<MonHistoire/>}/>
      </Routes>
    </Router>
  );
}
