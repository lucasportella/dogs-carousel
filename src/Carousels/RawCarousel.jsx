import React, { useState, useEffect } from 'react';

function RawCarousel() {
  const alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [spinners, setSpinners] = useState([0, 1, 2]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      const spinnersCopy = JSON.parse(JSON.stringify(spinners));
      const spinnersUpdated = spinnersCopy
        .map((spinner) => (spinner === alphabet.length - 1 ? 0 : spinner + 1));
      setSpinners(spinnersUpdated);
    }, 3000);
    return () => clearInterval(carouselInterval);
  }, [spinners]);

  return (
    <div>
      <div>Pure logical html carousel:</div>
      {' '}
      {spinners.map((index) => (
        <span>
          {' '}
          {alphabet[index]}
        </span>
      ))}
    </div>
  );
}

export default RawCarousel;
