import { Box } from "@mui/material";
import FeaturedShows from "./featured";
import AllShows from "./all";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
export default function Shows() {
  return (
 
      <Box data-testid="shows">
        <FeaturedShows />
        <AllShows />
      </Box>
 
  );
}
