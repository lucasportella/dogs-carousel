import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarouselsWrapper from './Carousels/CarouselsWrapper';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CarouselsWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
