// import React from 'react'

function Header({ toggleNavbar, isNavbarVisible }) {
  return (
    <div className="w-full h-[60px] bg-stone-50 pl-[21px] pr-[21px] py-[17px] justify-between items-center inline-flex">
      <div className="text-stone-950 text-[15px] font-semibold font-Utara uppercase">
        logo
      </div>
      <div
        onClick={toggleNavbar}
        className="p-[3px] bg-neutral-50 border border-stone-950 justify-center items-center gap-1 flex fixed right-[21px] z-[1000000] cursor-pointer "
      >
        <div onClick={toggleNavbar} className="px-[3px] py-[5px] flex-col justify-center items-center gap-[5px] inline-flex">
          {/* <div className={`w-5 h-[0px] border border-stone-950 ${isNavbarVisible && ("")}`}></div>
            <div className="w-5 h-[0px] border border-stone-950"></div>
            <div className="w-5 h-[0px] border border-stone-950"></div> */}
              <span
                className={`w-5 h-[0px] border border-stone-950 block transition-all ${
                  !isNavbarVisible
                    ? "menu"
                    : "-rotate-45 translate-y-[5.5px] translate-x-[1px]"
                }`}
              ></span>
              <span
                className={`w-5 h-[0px] border border-stone-950 block ${
                  !isNavbarVisible ? "w-full" : "w-1"
                }`}
              ></span>
              <span
                className={`w-5 h-[0px] border border-stone-950 block transition-all ${
                  !isNavbarVisible
                    ? "menu"
                    : "rotate-45 -translate-y-2 translate-x-[1px]"
                }`}
              ></span>
        </div>
        <p className="text-stone-950 text-[11px] font-medium font-Utara uppercase">
          {isNavbarVisible ? "close" : "menu"}
        </p>
      </div>
    </div>
  );
}

export default Header;
