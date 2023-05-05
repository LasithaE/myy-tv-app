import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./CarouselCard";

function CarouselComponent({cards}) {
  console.log(cards)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const product = cards.map((item) => (
    <CarouselCard
      key={item.title}
      title={item.title}
      image={item.image}
    />
  ));

  return (
    <div className="px-[20%]">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
export default CarouselComponent;
