import React from 'react';
import { Carousel } from 'react-bootstrap';
import picturesArray from '../pictures/picturesIndex';

function BootstrapCarousel() {
  const renderCarouselItems = () => (
    picturesArray.map((picture, index) => (

      <Carousel.Item>
        <img
          className="carouselImg"
          width={100}
          src={picture}
          alt={`pokemon${index + 1}`}
        />
      </Carousel.Item>

    ))
  );

  return (
    <div className="bootstrapCarouselFather">
      <div>Bootstrap Carousel:</div>
      <Carousel indicators={false}>
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;
