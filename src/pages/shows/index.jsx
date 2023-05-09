import { Box } from "@mui/material";
import FeaturedShows from "./featured";
import AllShows from "./all";
export default function Shows() {
  return (
    <Box id="shows">
      <FeaturedShows />
      <AllShows />
    </Box>
  );
}
