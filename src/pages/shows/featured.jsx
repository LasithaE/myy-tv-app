import { Box } from "@mui/material";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { fetchShows } from "@/redux/slices/show/showsSlice";
import { useDispatch, useSelector } from "react-redux";
import ShowCarouselComponent from "@/components/ShowCarouselComponent";
import Link from "next/link";
export default function FeaturedShows() {
  const dispatch = useDispatch();
  const featuredShows = useSelector((state) => state.shows.shows)
    .slice(0, 100)
    .sort((a, b) => b.rating.average - a.rating.average);
  useEffect(() => {
    dispatch(fetchShows());
  }, []);
  return (
    <Box className="pt-[150px]">
      <Box className="flex">
        <Link href="/shows">
          <Box className="text-xl pb-10 pl-12 pr-4 font-extrabold">
            Featured Shows
          </Box>
        </Link>
      </Box>
      <ShowCarouselComponent cards={featuredShows} />
    </Box>
  );
}
