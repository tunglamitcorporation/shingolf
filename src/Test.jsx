import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RoomComponent = () => {
  const { t } = useTranslation();
  const roomData = t("roomHN.hbt1", { returnObjects: true });
  return (
    <div className="container">
      <div className="row">
        {roomData.map((room, index) => (
          <div className="col-lg-6" key={index}>
            <div className="room-item">
              <Carousel 
                showArrows 
                showThumbs={false} 
                showStatus={false} 
                emulateTouch 
                stopOnHover 
                autoPlay 
                infiniteLoop
              >
                {room.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img src={image} alt={`Room ${index + 1} Image ${imageIndex + 1}`} />
                  </div>
                ))}
              </Carousel>
              <div className="card" style={{ border: "none" }}>
                <div className="row p-0">
                  <div className="col-md-12"></div>
                  <div className="col-md-12">
                    <div className="card-body">
                      <div className="card-title room-name">
                        {room.name}
                      </div>
                      <table className="room__des-table">
                        {/* ... (rest of your table content) */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn__reserve p-0 m-0">
                <Link to="/Reservation" style={{ textDecoration: "none", color: "white" }}>
                  Make a Reservation
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomComponent;