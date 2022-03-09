import React, { useEffect, useState } from 'react';
import fetch from './API';

function DogsPanel() {
  const [dogs, setDogs] = useState([]);
  const [rendered, setRendered] = useState([0, 1, 2]);

  const renderDogs = () => (
    dogs.map((dog) => <img src={dog} alt="random dog" />)
  );

  const getMoreDogs = async () => {
    try {
      const request = await fetch();
      if (request.data.status === 'success') {
        setDogs([...dogs, request.data.message]);
      }
    } catch (error) {
      alert('erro, tente novamente');
    }
  };

  const carousel = () => {
    if (dogs.length > 2) {
      return rendered.map((_, index) => {
        const imgSrc = dogs[rendered[index]];
        return (
          <img width="200" src={imgSrc} alt="dog in carousel" />
        );
      });
    }
    return null;
  };

  const carouselSpinner = () => {
    // console.log(`RENDERED${rendered[2]}`);
    // console.log(`dogs ${dogs.length - 1}`);
    if (rendered[2] === dogs.length - 1) {
      setRendered([0, 1, 2]);
    } else {
      const actualRendered = rendered;
      const updatedRendered = actualRendered.map((renderIndex) => renderIndex + 1);
      setRendered(updatedRendered);
    }
  };

  useEffect(() => {
    let carouselInterval;
    if (dogs.length > 2) {
      carouselInterval = setInterval(() => {
        carouselSpinner();
      }, 3000);
      return () => clearInterval(carouselInterval);
    }
    return undefined;
  });

  return (
    <div>
      <h1>Dogs</h1>
      {console.log('UPDATED')}
      <div className="dogsCarousel">
        <button type="button">{'<'}</button>
        {dogs.length > 2 ? carousel() : null}
        <button type="button">{'>'}</button>
      </div>
      <button type="button" onClick={getMoreDogs}>Get more dogs</button>
      {dogs.length > 0 ? <div>{renderDogs()}</div> : null}
    </div>
  );
}

export default DogsPanel;
