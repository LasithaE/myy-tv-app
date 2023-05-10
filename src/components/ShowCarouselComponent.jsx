import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import Link from "next/link";
import ShowCarouselCard from "./ShowCarouselCard";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowCarouselComponent({ cards }) {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 510 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 510, min: 0 },
      items: 1,
    },
  };

  const shows = cards.map((item) => (
    <Link  href={`/shows/${item.id}`} key={item.id}>
    <ShowCarouselCard
    

      key={item.id}
      title={item.name}
      genres={item.genres.slice(0, 3)}
      image={item.image.original}
      rating={item.rating.average}
    /></Link>
  ));

  return (
    <Box className="px-[20%] md:px-[10%]"
    data-testid="shows-carousel">
      <Carousel 
        responsive={responsive}
        customLeftArrow={
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            size="xl"
            color="white"
            className="absolute top-1/2 left-4 max-w-4 cursor-pointer text-primary-400"
          />
        }
        customRightArrow={
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            size="xl"
            color="white"
            className="absolute top-1/2 right-4 max-w-4 cursor-pointer text-primary-400"
          />
        }
      >
        {shows}
      </Carousel>
    </Box>
  );
}
