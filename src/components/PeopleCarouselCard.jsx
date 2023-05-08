import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "./Rating";
import { Genres } from "./Genres";

export default function PeopleCarouselCard({ title, onClick }) {
  return (
    <Card onClick={onClick}
      sx={{
        margin: 1,
        maxWidth: 300,
        backgroundColor: "black",
        color: "transparent",
        backdropFilter: "blur(7px)",
      }}
     
    >
      <CardMedia sx={{ height: 400 }} image={image} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h8"
          sx={{ fontWeight: "bold", height: 70 }}
          color="white"
          component="div"
        >
          {title}
        </Typography>

        <Typography
          gutterBottom
          height={80}
          fontSize="sm"
          color="white"
          component="div"
        >
          <Genres genres={genres} />
        </Typography>
        <Typography
          gutterBottom
          variant="h10"
          height={20}
          color="white"
          component="div"
        >
          <Rating rating={rating} />
        </Typography>
      </CardContent>
    </Card>
  );
}
