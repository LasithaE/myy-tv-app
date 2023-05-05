import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  return (
    <div className="sticky">
      <div className="text-3xl font-extrabold float-left pt-6 pl-8">Myy TV</div>
      <div className="hidden md:block pb-[30px] pt-[30px] fixed w-full bg-bodyColorLight max-h-[80px]">
        <div className="text-textColor mb-[20px] float-right">
          <Link href="/" smooth={true} className="mr-6 mt-9 font-semibold">
            Shows
          </Link>
          <Link
            href="/#people"
            smooth={true}
            className="mr-6 mt-9 font-semibold"
          >
            People
          </Link>
          <Link
            smooth={true}
            href="/#networks"
            className="mr-6 mt-9 font-semibold"
          >
            Networks
          </Link>
          <Link
            smooth={true}
            href="/#webchannels"
            className="mr-6 mt-9 font-semibold"
          >
            Web Channels
          </Link>
        </div>
      </div>
      <div onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          <>
            <div className="block fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-bodyColorLight h-screen md:hidden ">
              <div className="float-right mr-6 mt-6">
                <FontAwesomeIcon icon={faClose} size="xl" color="#FEFCFB" />
              </div>
              <div className="flex flex-col items-center justify-center pt-[25%] pl-2">
                <Link
                  href="/shows"
                  className="p-2 mr-8 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  Shows
                </Link>

                <Link
                  href="/people"
                  className="mr-8 p-2 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  People
                </Link>
                <Link
                  href="/networks"
                  className="mr-8 p-2 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  Networks
                </Link>

                <Link
                  href="/webchannels"
                  className="mr-8 p-2 mt-9 font-semibold hover:bg-darkPinkColor hover:border-transparent hover: rounded-md"
                >
                  Web Channels
                </Link>
              </div>
            </div>
          </>
        ) : (
          <nav>
            <div className="flex bg-bgDarkBlue fixed w-full z-10 max-h-[80px] md:hidden justify-between">
              <div className="float-left text-2xl font-bold pt-4 pl-6">
                Myy TV
              </div>
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className="pb-[20px] pt-[20px] mr-6"
                color="#FEFCFB"
                fontWeight="bold"
              />
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
export default NavBar;
