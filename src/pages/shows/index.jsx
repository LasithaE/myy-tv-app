
import { Box } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchShows } from "@/redux/slices/show/showsSlice";
import FeaturedShows from "./featured";
import AllShows from "./all";
export default function Shows() {

 
  return (
    <Box id="shows">
      <FeaturedShows/>
      <AllShows/>
    </Box>
  );
}

