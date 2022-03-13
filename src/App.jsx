import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarouselsWrapper from './Carousels/CarouselsWrapper';
import NotRoot from './RoutesTests/NotRoot';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarouselsWrapper />} />
        <Route path="notroot" element={<NotRoot />} />
      </Routes>
    </div>
  );
}

export default App;
