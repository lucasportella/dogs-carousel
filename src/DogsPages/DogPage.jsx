import React from 'react';
import { useLocation } from 'react-router-dom';

function DogPage() {
  const { state: { url } } = useLocation();
  return (
    <div>
      <h1>A Dogo</h1>
      <img src={url} alt="a dog" />
    </div>
  );
}

export default DogPage;
