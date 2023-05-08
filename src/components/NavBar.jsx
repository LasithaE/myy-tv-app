import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Box } from "@mui/material";
import React, { useState } from "react";
function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Box className="">
      <Box className="hidden md:block pb-[30px] pt-[30px] fixed w-full max-h-[80px]  bg-bgDarkBlue z-10">
        <Link href="/" className="text-3xl font-extrabold float-left pl-8">
          Myy TV
        </Link>
        <Box className="text-textColor mb-[20px] float-right">
          <Link href="/" smooth={true} className="mr-6 mt-9 font-semibold">
            Shows
          </Link>
          <Link href="/people" className="mr-6 mt-9 font-semibold">
            People
          </Link>
        </Box>
      </Box>
      <Box onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          <>
            <Box className="block fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-bgDarkBlue h-screen md:hidden ">
              <Box className="float-right mr-6 mt-6">
                <FontAwesomeIcon icon={faClose} size="xl" color="#FEFCFB" />
              </Box>
              <Box className="flex flex-col items-center justify-center pt-[25%] pl-2">
                <Link
                  href="/shows"
                  className="p-2 mr-8 mt-9 font-semibold hover:bg-lightBlue hover:border-transparent hover: rounded-md"
                >
                  Shows
                </Link>

                <Link
                  href="/people"
                  className="mr-8 p-2 mt-9 font-semibold hover:bg-lightBlue hover:border-transparent hover: rounded-md"
                >
                  People
                </Link>
              </Box>
            </Box>
          </>
        ) : (
          <nav>
            <Box className="flex bg-bgDarkBlue fixed w-full z-10 max-h-[80px] md:hidden justify-between">
              <Link
                href="/"
                className="float-left text-2xl font-bold pt-4 pl-8"
              >
                Myy TV
              </Link>
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className="pb-[20px] pt-[20px] mr-6"
                color="#FEFCFB"
                fontWeight="bold"
              />
            </Box>
          </nav>
        )}
      </Box>
    </Box>
  );
}
export default NavBar;
