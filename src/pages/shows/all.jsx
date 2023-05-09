import { Box } from "@mui/material";
import { useEffect } from "react";
import { fetchShows } from "../../redux/slices/show/showsSlice";
import { useDispatch, useSelector } from "react-redux";
import ShowCarouselComponent from "../../components/ShowCarouselComponent";
import Link from "next/link";
export default function AllShows() {
  const dispatch = useDispatch();
  const allShows = useSelector((state) => state.shows.shows).slice(0, 100);
  useEffect(() => {
    dispatch(fetchShows());
  }, []);
  return (
    <Box className="pt-[150px]" data-testid="all-shows">
      <Box className="flex">
        <Link href="/shows/all">
          <Box className="text-xl pb-10 pl-12 pr-4 font-extrabold">
            All Shows
          </Box>
        </Link>
      </Box>
      <ShowCarouselComponent cards={allShows} />
    </Box>
  );
}
