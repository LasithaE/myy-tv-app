import { fetchShowDetails } from "../../redux/slices/show/showDetailsSlice";
import { Box, Card, Typography, CardMedia } from "@mui/material";
import { Genres } from "../../components/Genres";
import Rating from "../../components/Rating";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider, useDispatch, useSelector } from "react-redux";
export default function ShowDetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const showDetails = useSelector((state) => state.showDetails.showDetails);

    const { id } = router.query;


  useEffect(() => {
    dispatch(fetchShowDetails({ id }));
  }, []);

  return (
    <Box
      data-testid="show-details"
      className="flex items-center pt-[100px] justify-center"
    >
      <Box sx={{ m: 4, width: 300 }}>
        <Box sx={{ display: "flex", ml: 1, flexDirection: "row" }}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: "bold", height: 40, mb: 10 }}
            color="white"
            component="div"
          >
            {showDetails?.name || "TITLE"}
          </Typography>
        </Box>
        <Card
          sx={{
            mt: 10,
            margin: 1,
            maxWidth: 300,
            color: "transparent",
            backdropFilter: "blur(7px)",
          }}
        >
          <CardMedia
            sx={{ height: 400, width: 300 }}
            image={showDetails?.image?.original || "/public/assets/sample.png"}
            title={showDetails?.name}
          />
        </Card>
        <Box>
          <Box sx={{ m: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                Network :
              </Typography>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                &nbsp;
                {showDetails?.network?.name || "HBO"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                Status :
              </Typography>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                &nbsp;
                {showDetails?.status || "Ended"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                Genres :&nbsp;
              </Typography>
              <Typography
                gutterBottom
                height={80}
                fontSize="sm"
                color="white"
                component="div"
                sx={{ fontWeight: "bold", height: 40 }}
              >
                <Genres
                  genres={["drama", "horror", "funny"] || showDetails?.genres}
                />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                Rating :&nbsp;&nbsp;
              </Typography>
              <Typography
                gutterBottom
                variant="h10"
                height={40}
                sx={{ mt: 0.5 }}
                color="white"
                component="div"
              >
                <Rating rating={7.5 || showDetails} />
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mx: 3 }}>
            <Typography
              gutterBottom
              variant="h8"
              sx={{ fontWeight: "bold", height: 40 }}
              color="white"
              component="div"
            >
              Summary :
            </Typography>
            <Typography
              gutterBottom
              variant="h8"
              sx={{ height: 40 }}
              color="white"
              component="div"
            >
              &nbsp;
              {showDetails?.summary?.replace(/<[^>]*>/g, "") || "Ended"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
