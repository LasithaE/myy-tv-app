import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import {useRouter} from "next/router";
import ShowCarouselCard from "./ShowCarouselCard";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowCarouselComponent({cards}) {
  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/shows/${id}`)
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
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

  const shows = cards.map((item) => (
   
      <ShowCarouselCard
      key={item.id}
        onClick={()=>handleClick(item.id)}
        title={item.name}
        genres={item.genres.slice(0, 3)}
        image={item.image.original}
        rating={item.rating.average}
      />
  ));

  return (
    <Box className="px-[20%]">
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

