import { use } from 'i18next';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

const RoomCard = ({ name, size, price, images }) => {
  return (
    <div className="card">
      <Carousel
       showArrows
       showThumbs={false}
       showStatus={false}
       emulateTouch
       stopOnHover
       autoPlay
       infiniteLoop>
        {images.map((image, index) => (
            <img
              src={image}
              alt={`Slide ${index}`}
            />
         
        ))}
      </Carousel>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Size: {size}</p>
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
  );
};

const HotelRoomsPage = () => {
  const {t} = useTranslation()
  const rooms = t('testRoom', {returnObjects: true})

  return (
    <div className="container">
      <div className="row">
        {rooms.map((room, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <RoomCard {...room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelRoomsPage;