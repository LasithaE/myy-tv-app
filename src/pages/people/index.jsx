import React, { useEffect } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PeopleCarouselComponent from "@/components/PeopleCarouselComponent";
import { fetchPeople } from "@/redux/slices/people/peopleSlice";
export default function People() {
  const dispatch = useDispatch();
  const allPeople = useSelector((state) => state.people.people).slice(0, 100);
  useEffect(() => {
    dispatch(fetchPeople());
  }, []);
  return (
    <Box id="people" className="pt-[100px]">
      <Link href="/people">
        <Box className="text-xl pb-10 pl-12 pr-4 font-extrabold">People</Box>
      </Link>
      <PeopleCarouselComponent cards={allPeople} />
    </Box>
  );
}
