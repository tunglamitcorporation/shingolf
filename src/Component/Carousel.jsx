import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function RoomCarousel() {
  return (
    <Carousel 
    showArrows 
    showThumbs={false} 
    showStatus={false} 
    emulateTouch
    stopOnHover
    autoPlay
    infiniteLoop>
    <div>
        <img src="https://azumayavietnam.com/wp-content/themes/azumaya-2023/img/room/HN/HBT-New/DuluxeF1NoView1.jpg" />
    </div>
    <div>
        <img src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/gsqhdidm2azopyn4cjkr.jpg" />
    </div>
    <div>
        <img src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/ab6cgek0l1fubt0fr1rz.jpg" />
    </div>
</Carousel>
  );
}