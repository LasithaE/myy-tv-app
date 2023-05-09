import { useState, useEffect } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Box } from "@mui/material";
function Stars(rating) {
  const [ratingInStars, setRatingInStars] = useState(0);
  useEffect(() => {
    const ratingInTen = rating.rating / 2;
    setRatingInStars(ratingInTen);
  }, [rating]);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {[...Array(Math.floor(ratingInStars))].map((_, i) => (
        <FaStar key={i} color="gold" />
      ))}
      {ratingInStars % 1 !== 0 && <FaStarHalf color="gold" />}
    </Box>
  );
}

export default function Rating({ rating }) {
  return <Stars rating={rating} />;
}
