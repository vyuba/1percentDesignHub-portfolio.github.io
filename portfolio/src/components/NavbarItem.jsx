// import React from 'react'

function NavbarItem() {
  return (
    <div className="h-12 w-[226px] border-2 px-3 border-stone-950 justify-between items-center  inline-flex cursor-pointer">
    <div className="text-stone-950 text-[15px] font-semibold font-Utara uppercase">
      home
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
  )
}

export default NavbarItem