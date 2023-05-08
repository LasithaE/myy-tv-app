
import { Box } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchShows } from "@/redux/slices/show/showsSlice";
import FeaturedShows from "./featured";
import AllShows from "./all";
export default function Shows() {
  // const dispatch = useDispatch();
  // const shows = useSelector((state) => state.shows.shows).slice(0, 100);
  // useEffect(() => {
  //   dispatch(fetchShows());
  // }, []);
 
  return (
    <Box id="shows">
      <FeaturedShows/>
      <AllShows/>
    </Box>
  );
}

