// import React from 'react'
import { Link } from "react-router-dom";
// import NavbarItem from "./NavbarItem";

function Navbar({toggleNavbar, isNavbarVisible}) {
  return (
    <div className=" min-w-0 max-w-[302px]  overflow-hidden h-full  pl-[43px] pr-[30px] pt-[108px] pb-[533px] bg-neutral-50 flex-col justify-start items-center md:inline-flex border-r ">
      <div className="self-stretch flex-col justify-start items-start gap-[27px] inline-flex">
        <Link to="/" onClick={toggleNavbar}>
        <div className="pl-2 pr-[22px] pt-2.5 justify-center items-center gap-[135px] flex cursor-pointer ">
          <div className="pb-2.5 pr-[8.2rem]  justify-center items-center gap-2.5 flex">
            <div className=" flex items-center gap-2 text-stone-950 text-lg md:text-xl font-semibold font-Utara uppercase">
                <div className="w-5 h-5 bg-black"></div>
              home
            </div>
          </div>
        </div>
        </Link>
        <Link to="/Work">
        <div className="pl-2 pr-[22px] pt-2.5 justify-center items-center gap-[135px] flex cursor-pointer ">
          <div className="pb-2.5 pr-[8.2rem]  justify-center items-center gap-2.5 flex">
            <div className=" flex items-center gap-2 text-stone-950 text-lg md:text-xl font-semibold font-Utara uppercase">
              work
            </div>
          </div>
        </div>
        </Link>
        <Link to="/AboutMe">
        <div className="pl-2 pr-[22px] pt-2.5 justify-center items-center gap-[135px] flex cursor-pointer ">
          <div className="pb-2.5 pr-[5rem]  justify-center items-center gap-2.5 flex">
            <div className=" flex items-center gap-2 text-stone-950 text-lg md:text-xl font-semibold font-Utara uppercase">
              about me
            </div>
          </div>
        </div>
        </Link>
       
      </div>
    </div>
  );
}

export default Navbar;
