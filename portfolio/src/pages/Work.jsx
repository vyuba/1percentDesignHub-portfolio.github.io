// import React from 'react'
import data from "../components/data.js"
import Projects from "../components/projects";

function Work() {
  const projectCard = data.map((Projectdata) => {
    return (
      <Projects
        key={Projectdata.id}
        id={Projectdata.id}
        brand={Projectdata.brand}
        website={Projectdata.website}
        description={Projectdata.description}
        tools={Projectdata.tools}
        poster1={Projectdata.poster1}
        poster2={Projectdata.poster2}
        poster3={Projectdata.poster3}
      />
    );
  });
  return (
    <div className="w-full bg-neutral-50 p-7 flex flex-col gap-10 pb-10 ">
      <div className=" justify-start items-start gap-[15px] inline-flex">
        <div className="p-2.5 border-2 border-black justify-center items-center gap-2.5 flex">
          <div className="text-black text-[15px] font-semibold font-Utara uppercase">
            all
          </div>
        </div>
        <div className="p-2.5 border-b border-black border-dashed justify-center items-center gap-2.5 flex">
          <div className="text-black text-[15px] font-semibold font-Utara uppercase">
            designs
          </div>
        </div>
        <div className="p-2.5 border-b border-black border-dashed justify-center items-center gap-2.5 flex">
          <div className="text-black text-[15px] font-semibold font-Utara uppercase">
            dev
          </div>
        </div>
      </div>
      {projectCard}
    </div>
  );
}

export default Work;
