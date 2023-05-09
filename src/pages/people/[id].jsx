import { fetchPeopleDetails } from "@/redux/slices/people/peopleDetailsSlice";
import { Box, Card, Typography, CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
export default function ShowDetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const peopleDetails = useSelector(
    (state) => state.peopleDetails.peopleDetails
  );
  const { id } = router.query;
  function calculateAge(dateString) {
    const birthDate = new Date(dateString);
    const ageInMilliseconds = Date.now() - birthDate.getTime();
    const ageInYears = Math.floor(
      ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
    );
    return ageInYears;
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }
  useEffect(() => {
    dispatch(fetchPeopleDetails({ id }));
  }, []);
  console.log("oooooo", peopleDetails);
  return (
    <Box className="flex items-center pt-[100px] justify-center">
      <Box sx={{ m: 4, width: 300 }}>
        <Box sx={{ display: "flex", ml: 1, flexDirection: "row" }}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: "bold", height: 40, mb: 10 }}
            color="white"
            component="div"
          >
            {peopleDetails?.name || "TITLE"}
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
            image={
              peopleDetails?.image?.original || "/public/assets/sample.png"
            }
            title={peopleDetails?.name}
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
                Birthday :
              </Typography>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                &nbsp;
                {formatDate(peopleDetails?.birthday) || "DD-MM-YYYY"}
              </Typography>
            </Box>
            {!peopleDetails?.deathday ? (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  gutterBottom
                  variant="h8"
                  sx={{ fontWeight: "bold", height: 40 }}
                  color="white"
                  component="div"
                >
                  Age :
                </Typography>
                <Typography
                  gutterBottom
                  variant="h8"
                  sx={{ fontWeight: "bold", height: 40 }}
                  color="white"
                  component="div"
                >
                  &nbsp;
                  {calculateAge(peopleDetails?.birthday) || "0"}&nbsp;years
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  gutterBottom
                  variant="h8"
                  sx={{ fontWeight: "bold", height: 40 }}
                  color="white"
                  component="div"
                >
                  Died at :
                </Typography>
                <Typography
                  gutterBottom
                  variant="h8"
                  sx={{ fontWeight: "bold", height: 40 }}
                  color="white"
                  component="div"
                >
                  &nbsp;
                  {formatDate(peopleDetails?.birthday) || "DD-MM-YYYY"}
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                Gender :
              </Typography>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                &nbsp;
                {peopleDetails?.gender || "Male"}
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
                Born at :
              </Typography>
              <Typography
                gutterBottom
                variant="h8"
                sx={{ fontWeight: "bold", height: 40 }}
                color="white"
                component="div"
              >
                &nbsp;
                {peopleDetails?.country?.name || "US"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
