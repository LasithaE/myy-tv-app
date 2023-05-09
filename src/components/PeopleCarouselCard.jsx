import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function PeopleCarouselCard({ title, image, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        margin: 1,
        maxWidth: 300,
        backgroundColor: "black",
        color: "transparent",
        backdropFilter: "blur(7px)",
      }}
    >
      <CardMedia
        sx={{ height: 400 }}
        image={image || "public/assets/sample.png"}
        title={title}
      />
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
      </CardContent>
    </Card>
  );
}
