// import React from 'react'

function Navbar() {
  return (
    <div className="w-[302px] h-screen hidden pl-[43px] pr-[30px] pt-[108px] pb-[533px] bg-neutral-50 flex-col justify-start items-center md:inline-flex border-r ">
      <div className="self-stretch flex-col justify-start items-start gap-[27px] inline-flex">
        <div className="pl-2 pr-[22px] pt-2.5 justify-center items-center gap-[135px] inline-flex cursor-pointer">
          <div className="pb-2.5 border-b border-stone-950 border-dashed justify-center items-center gap-2.5 flex">
            <div className="text-stone-950 text-[15px] font-semibold font-['Utara'] uppercase">
              home
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
          >
            <path
              id="Arrow 5"
              d="M15.9999 9.52019L1.02331 0.81959L0.976689 18.14L15.9999 9.52019ZM0.995962 10.9798L2.49596 10.9838L2.50403 7.98386L1.00404 7.97982L0.995962 10.9798Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
        <div className="pl-2 pr-[22px] py-2.5 border-2 border-stone-950 justify-center items-center gap-[104px] inline-flex cursor-pointer">
          <div className="text-stone-950 text-[15px] font-semibold font-['Utara'] uppercase">
            projects
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
          >
            <path
              id="Arrow 5"
              d="M15.9999 9.52019L1.02331 0.81959L0.976689 18.14L15.9999 9.52019ZM0.995962 10.9798L2.49596 10.9838L2.50403 7.98386L1.00404 7.97982L0.995962 10.9798Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
        <div className="pl-2 pr-[22px] pt-2.5 justify-center items-center gap-[104px] inline-flex cursor-pointer">
          <div className="pb-2.5 border-b border-stone-950 border-dashed justify-center items-center gap-2.5 flex">
            <div className="text-stone-950 text-[15px] font-semibold font-['Utara'] uppercase">
              about us
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
          >
            <path
              id="Arrow 5"
              d="M15.9999 9.52019L1.02331 0.81959L0.976689 18.14L15.9999 9.52019ZM0.995962 10.9798L2.49596 10.9838L2.50403 7.98386L1.00404 7.97982L0.995962 10.9798Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
