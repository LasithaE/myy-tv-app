import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

export default function MediaCard(prop) {
  console.log('cardssssss',prop)
  return (
    <Card sx={{ margin:1, maxWidth: 300,backgroundColor:'black',color:"transparent", backdropFilter:"blur(7px)" }}>
      <CardMedia sx={{ height: 400 }} image={prop.image} title={prop.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" color="white" component="div">
          {prop.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:"whitesmoke"}} size="small">Know More</Button>
      </CardActions>
    </Card>
  );
}
