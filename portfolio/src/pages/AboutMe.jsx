import banner from "/assets/abut me banner.png"

function AboutMe() {
  return (
    <>
        <img className="md:h-24 w-full" src={banner} alt="" />
    <div className="w-full h-full bg-neutral-50 p-7 flex flex-col gap-4 pb-10">
      <div className=" p-2.5 w-fit border-2 cursor-pointer border-stone-950 text-stone-950 text-[15px] font-semibold font-Utara uppercase">
        about me
      </div>
      <div className="w-full text-stone-950 text-4xl font-bold font-Utara uppercase">
        developer and designer
      </div>
      <div className="w-full  text-stone-950 text-xs font-CooperHewitt    capitalize">
        Hello! I’m Alexander Preye, a passionate frontend developer and design
        enthusiast. My journey in the digital realm has been an exciting blend
        of code, creativity, and aesthetics. I thrive on transforming ideas into
        interactive and visually appealing web experiences using React.js,
        Tailwind CSS, JavaScript, and Liquid for Shopify theme development.
        Design isn’t just my job; it’s my playground where I explore color
        palettes, typography, and layout compositions, believing every pixel
        matters. Beyond the screen, fashion and basketball are my passions—I
        find inspiration in the intersection of aesthetics and self-expression,
        and the rhythm of dribbling and the thrill of a perfect shot keep me
        grounded and energized. The crypto space fascinates me, and I’m eager to
        dive into decentralized finance (DeFi) and non-fungible tokens (NFTs),
        exploring this ever-evolving landscape. Feel free to explore my
        portfolio and discover more about my work. Let’s create something
        remarkable together! If you need a code snippet or a design tip, I’m
        just a message away!
      </div>
      <div className="grid gap-2">
        <div className="pb-2.5  border-b-2 border-dashed border-stone-950 justify-start items-center inline-flex">
            <div className="text-stone-950 text-[15px] font-bold font-Utara uppercase">
            skills
            </div>
        </div>
        <ul className="skills grid text-xs font-Utara font-medium capitalize ">
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">Html</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">vanilla css</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">Tailwind css</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">bootstrap</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">JavaScript</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">reactjs</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">shopify</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">liquid</li>
            <li className=" bg-gray-950   text-white px-3 py-2 w-fit rounded-2xl">figma</li>
        </ul>        
      </div>
      <div className="pb-2.5  border-b-2 border-dashed border-stone-950 justify-start items-center inline-flex">
        <div className="text-stone-950 text-[15px] font-bold font-Utara uppercase">
          people i have worked with
        </div>
      </div>
      <div className="px-[9px] w-full  items-center justify-between inline-flex">
        <div className="text-stone-950 text-[15px] font-normal font-Utara uppercase">
          deeds
        </div>
        <div className="justify-between hover:border-dashed hover:border-b border-black items-center gap-[5px] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g id="octicon:link-24" clipPath="url(#clip0_166_163)">
              <path
                id="Vector"
                d="M9.85341 2.43533C10.0971 2.19164 10.3864 1.99833 10.7048 1.86645C11.0232 1.73457 11.3644 1.66669 11.7091 1.66669C12.0537 1.66669 12.395 1.73457 12.7134 1.86645C13.0318 1.99833 13.3211 2.19164 13.5647 2.43533C13.8084 2.67902 14.0017 2.96832 14.1336 3.28672C14.2655 3.60511 14.3334 3.94637 14.3334 4.291C14.3334 4.63562 14.2655 4.97688 14.1336 5.29527C14.0017 5.61367 13.8084 5.90297 13.5647 6.14666L11.1467 8.56466C10.8843 8.82713 10.5692 9.03096 10.2223 9.16267C9.87526 9.29438 9.50428 9.35098 9.13381 9.32874C8.76333 9.3065 8.40179 9.20592 8.07305 9.03364C7.74431 8.86136 7.45586 8.62131 7.22674 8.32933C7.1447 8.22501 7.02458 8.15755 6.8928 8.1418C6.76103 8.12605 6.62839 8.16329 6.52407 8.24533C6.41976 8.32737 6.3523 8.44749 6.33655 8.57926C6.32079 8.71104 6.35803 8.84368 6.44007 8.948C6.75659 9.35109 7.15499 9.68246 7.609 9.92024C8.06301 10.158 8.56228 10.2968 9.07387 10.3274C9.58547 10.358 10.0977 10.2798 10.5769 10.0979C11.056 9.91594 11.4911 9.63446 11.8534 9.272L14.2721 6.85333C14.6086 6.51679 14.8756 6.11727 15.0577 5.67757C15.2398 5.23786 15.3336 4.76659 15.3336 4.29066C15.3336 3.81473 15.2398 3.34346 15.0577 2.90376C14.8756 2.46405 14.6086 2.06453 14.2721 1.728C13.9355 1.39146 13.536 1.12451 13.0963 0.942377C12.6566 0.760246 12.1853 0.666504 11.7094 0.666504C11.2335 0.666504 10.7622 0.760246 10.3225 0.942377C9.8828 1.12451 9.48328 1.39146 9.14674 1.728L7.14674 3.728C7.05562 3.82225 7.00516 3.94853 7.00624 4.07963C7.00731 4.21073 7.05984 4.33616 7.1525 4.42891C7.24516 4.52166 7.37054 4.5743 7.50164 4.5755C7.63274 4.5767 7.75906 4.52636 7.85341 4.43533L9.85341 2.43533Z"
                fill="#0F0F0F"
              />
              <path
                id="Vector_2"
                d="M4.85333 7.43532C5.11573 7.17284 5.43083 6.96902 5.77782 6.83731C6.12481 6.7056 6.49579 6.649 6.86626 6.67124C7.23674 6.69348 7.59828 6.79406 7.92702 6.96634C8.25576 7.13861 8.54421 7.37867 8.77333 7.67065C8.81395 7.7223 8.86435 7.76545 8.92165 7.79763C8.97894 7.8298 9.04202 7.85038 9.10726 7.85818C9.17251 7.86598 9.23866 7.86085 9.30193 7.84309C9.36519 7.82532 9.42434 7.79527 9.476 7.75465C9.52765 7.71403 9.5708 7.66363 9.60297 7.60633C9.63515 7.54904 9.65572 7.48596 9.66352 7.42071C9.67132 7.35546 9.66619 7.28932 9.64843 7.22605C9.63067 7.16278 9.60062 7.10364 9.55999 7.05198C9.24348 6.64889 8.84507 6.31752 8.39107 6.07973C7.93706 5.84195 7.43778 5.70317 6.92619 5.67255C6.4146 5.64193 5.90234 5.72017 5.42321 5.9021C4.94408 6.08403 4.50899 6.36552 4.14666 6.72798L1.728 9.14665C1.39146 9.48318 1.12451 9.88271 0.942377 10.3224C0.760246 10.7621 0.666504 11.2334 0.666504 11.7093C0.666504 12.1852 0.760246 12.6565 0.942377 13.0962C1.12451 13.5359 1.39146 13.9354 1.728 14.272C2.06453 14.6085 2.46405 14.8755 2.90376 15.0576C3.34346 15.2397 3.81473 15.3335 4.29066 15.3335C4.76659 15.3335 5.23786 15.2397 5.67757 15.0576C6.11727 14.8755 6.51679 14.6085 6.85333 14.272L8.85333 12.272C8.90245 12.2262 8.94185 12.171 8.96918 12.1097C8.99651 12.0483 9.0112 11.9821 9.01239 11.915C9.01357 11.8479 9.00122 11.7812 8.97608 11.7189C8.95093 11.6567 8.9135 11.6001 8.86602 11.5526C8.81854 11.5051 8.76199 11.4677 8.69973 11.4426C8.63747 11.4174 8.57078 11.4051 8.50365 11.4063C8.43651 11.4074 8.3703 11.4221 8.30897 11.4495C8.24764 11.4768 8.19244 11.5162 8.14666 11.5653L6.14666 13.5653C5.90293 13.809 5.61358 14.0023 5.29515 14.1342C4.97671 14.266 4.63542 14.3339 4.29076 14.3339C3.59469 14.3338 2.92715 14.0572 2.435 13.565C2.19131 13.3212 1.99801 13.0319 1.86614 12.7135C1.73427 12.395 1.66642 12.0537 1.66645 11.7091C1.66651 11.013 1.94309 10.3455 2.43533 9.85332L4.85333 7.43532Z"
                fill="#0F0F0F"
              />
            </g>
            <defs>
              <clipPath id="clip0_166_163">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-stone-950 text-[15px] font-normal font-Utara capitalize">
            link
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutMe;
