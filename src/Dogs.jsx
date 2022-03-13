import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchInitialDogs, fetchMoreDogs } from './API';

function DogsPanel() {
  const [dogs, setDogs] = useState([]);
  const [rendered, setRendered] = useState([0, 1, 2]);

  useEffect(async () => {
    const { data } = await fetchInitialDogs();
    const initialDogs = data.message.map((dog) => ({ value: dog, key: uuidv4() }));
    if (data.status === 'success') {
      setDogs(initialDogs);
    }
  }, []);

  const renderDogs = () => dogs.map((dog) => <img width="30" src={dog.value} key={dog.key} alt="random dog" />);

  const getMoreDogs = async () => {
    try {
      const request = await fetchMoreDogs();
      if (request.data.status === 'success') {
        setDogs([...dogs, { value: request.data.message, key: uuidv4() }]);
      }
    } catch (error) {
      console(error);
    }
  };

  useEffect(() => {
    if (dogs.length > 2) {
      setRendered([dogs.length - 3, dogs.length - 2, dogs.length - 1]);
    }
  }, [dogs]);

  const carousel = () => rendered.map((_, index) => {
    const imgSrc = dogs[rendered[index]].value;
    return (
      <img key={dogs[rendered[index]].key} width="200" src={imgSrc} alt="dog in carousel" />
    );
  });

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
    if (dogs.length) {
      const carouselInterval = setInterval(() => {
        carouselSpinner();
      }, 3000);
      return () => clearInterval(carouselInterval);
    }
    return null;
  });

  const renderContent = () => (
    <div>
      <div>Dynamic carousel rendering data from API:</div>
      <h3>Dogs</h3>
      <div className="dogsCarousel">
        <button type="button">{'<'}</button>
        <div>{carousel()}</div>
        <button type="button">{'>'}</button>
      </div>
      <button type="button" onClick={getMoreDogs}>Get more dogs</button>
      {renderDogs()}
    </div>
  );

  return (
    <div>{dogs.length ? renderContent() : <div>Loading...</div> }</div>
  );
}

export default DogsPanel;
