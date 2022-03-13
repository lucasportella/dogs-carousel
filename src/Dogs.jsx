import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import fetch from './API';

function DogsPanel() {
  const [dogs, setDogs] = useState([]);
  const [rendered, setRendered] = useState([]);

  const renderDogs = () => dogs.map((dog) => <img src={dog.value} key={dog.key} alt="random dog" />);

  const getMoreDogs = async () => {
    try {
      const request = await fetch();
      if (request.data.status === 'success') {
        setDogs([...dogs, { value: request.data.message, key: uuidv4() }]);
      }
      if (dogs.length === 4) {
        setRendered([0, 1, 2]);
      }
    } catch (error) {
      console(error);
    }
  };

  const carousel = () => {
    if (dogs.length > 3) {
      return rendered.map((_, index) => {
        const imgSrc = dogs[rendered[index]].value;
        return (
          <img key={dogs[rendered[index]].key} width="200" src={imgSrc} alt="dog in carousel" />
        );
      });
    }
    return null;
  };

  const carouselSpinner = () => {
    const actualRendered = JSON.parse(JSON.stringify(rendered));
    for (let i = 0; i < actualRendered.length; i += 1) {
      if (actualRendered[i] === dogs.length - 1) {
        actualRendered[i] = 0;
      } else {
        actualRendered[i] += 1;
      }
    }
    setRendered(actualRendered);
  };

  useEffect(() => {
    let carouselInterval;
    if (dogs.length > 3) {
      carouselInterval = setInterval(() => {
        carouselSpinner();
      }, 3000);
      return () => clearInterval(carouselInterval);
    }
    return undefined;
  }, [rendered]);

  return (
    <div>
      <div>Dynamic carousel rendering data from API with html:</div>
      <h3>Dogs</h3>
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
