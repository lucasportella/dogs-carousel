import React from 'react';
import RawCarousel from './RawCarousel';
import DogsCarousel from './DogsCarousel';
import BootstrapCarousel from './BootstrapCarousel';

function CarouselsWrapper() {
  return (
    <div>
      <BootstrapCarousel />
      <br />
      <RawCarousel />
      <br />
      <DogsCarousel />
    </div>
  );
}

export default CarouselsWrapper;
