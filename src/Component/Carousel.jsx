import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

export default function RoomCarousel() {
  const {t} = useTranslation()
  const First=t("HBT1Image.First", {returnObjects: true})
  const Second=t("HBT1Image.Second", {returnObjects: true})
  const Third=t("HBT1Image.Third", {returnObjects: true})
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
