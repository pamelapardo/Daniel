import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galerie from './galerie';
import Landing from './landing';
import MonHistoire from './monHistoire';
import Poesie from './poesie';

export default function AppNavigations (props) {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/galerie' element={<Galerie/>}/>
        <Route exact path='/monHistoire' element={<MonHistoire/>}/>
        <Route exact path='/poesie' element={<Poesie/>}/>
      </Routes>
    </Router>
  );
}
