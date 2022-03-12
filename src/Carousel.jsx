import React, { useState, useEffect } from 'react';

function Carousel() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const [spinners, setSpinners] = useState([0, 1, 2]);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      const spinnersCopy = JSON.parse(JSON.stringify(spinners));
      console.log(spinnersCopy);
      const spinnersUpdated = spinnersCopy
        .map((spinner) => (spinner === alphabet.length - 1 ? 0 : spinner + 1));
      console.log(spinnersUpdated);
      setSpinners(spinnersUpdated);
    }, 3000);
    return () => clearInterval(carouselInterval);
  }, [spinners]);

  return (spinners.map((index) => <div>{alphabet[index]}</div>));
}

export default Carousel;
