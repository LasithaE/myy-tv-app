import { fetchShowDetails } from "@/redux/slices/show/showsSlice";
import Image from "next/image";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Genres } from "@/components/Genres";
import { Rating } from "@/components/Rating";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
export default function ShowDetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const showDetails = useSelector((state) => state.showDetails);
  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchShowDetails(id));
  }, [id]);
  console.log("showwwww", showDetails);

  return (
    <Box className="flex items-center pt-[100px] justify-center">
      <Box className="block md:hidden">
        <Card
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
            image={show.image.original}
            title={show.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h8"
              sx={{ fontWeight: "bold", height: 70 }}
              color="white"
              component="div"
            >
              {show.title}
            </Typography>

            <Typography
              gutterBottom
              height={80}
              fontSize="sm"
              color="white"
              component="div"
            >
              <Genres genres={show.genres} />
            </Typography>
            <Typography
              gutterBottom
              variant="h10"
              height={20}
              color="white"
              component="div"
            >
              <Rating rating={show.rating} />
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className="hidden md:block">HI</Box>
    </Box>
  );
}
