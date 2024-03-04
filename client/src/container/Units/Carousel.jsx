import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import data from "../../JSON/data.json"

export default function RoomCarousel() {
  return (
    <div>
          <Carousel 
          showArrows 
          showThumbs={false} 
          showStatus={false} 
          emulateTouch 
          stopOnHover 
          autoPlay 
          infiniteLoop>
            {data.image.map((item)=>(
              <img src={item} alt="" />
            ))}
          </Carousel>
    </div>
//     <>
//     {HBT1Carousel.map((carousel)=>(
//     <Carousel 
//     showArrows 
//     showThumbs={false} 
//     showStatus={false} 
//     emulateTouch
//     stopOnHover
//     autoPlay  
//     infiniteLoop>
//       {carousel.map((item)=>(
//         <img src={item.image} />
//       ))}
// </Carousel>
    //   </>
    // ))}
  );
}
